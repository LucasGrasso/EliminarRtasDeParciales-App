import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import FileFormInput from './components/FileFormInput'
import Loader from './components/Loader'
import TextFormInput from './components/TextFormInput'

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [fileName, setFileName] = useState<string>('Tu PDF')
  const [searchStrings, setSearchStrings] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [randomNumber] = useState<number>(Math.ceil(Math.random() * 12))

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file)
      setFileName(file.name.split('.')[0])
    } else {
      setSearchStrings(e.target.value)
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!file || !searchStrings) return
    e.preventDefault()
    const arrSearchStrings = searchStrings.split(',').map((s: string) => s.trim())
    const formData = new FormData();
    formData.append("search_strings", JSON.stringify(arrSearchStrings));
    formData.append("file", file, file.name);
    setLoading(true)
    try {
      const res = await fetch('https://api.eliminarrtas.lucasgrasso.com.ar/eraseAnswers', {
        method: "POST",
        body: formData,
      })
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      setLoading(false)

      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}_SinCorrecciones.pdf`;
      document.body.appendChild(link);

      link.click();

      URL.revokeObjectURL(url);
      link.remove();

    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  if (!randomNumber) return <Loader />

  return (
    <div className="App">
      <div className='studentEmojiContainer'>
        <img src={`/images/${randomNumber}.png`} alt="Student Emoji" className="studentEmoji" />
      </div>
      <h1>Borrar y Estudiar</h1>
      <form className='flex-col' onSubmit={handleSubmit}>
        <TextFormInput
          name='searchStrings'
          label='Respuestas a borrar. Si quiere borrar todas los V,F y X, escriba V,F,X'
          required={true}
          id='searchStrings'
          placeholder='V,F,X'
          onChange={onChange} />
        <FileFormInput
          name="file"
          label='Arrastra o selecciona tu PDF (Con texto, no PDF de imagenes)'
          accept='application/pdf'
          required={true}
          onChange={onChange}
          id='file'
          placeholder={fileName}
        />
        <Button
          loading={loading}
          loadingMsg="Ya te llega tu parcial..."
          type='submit'
        >
          Borrar Respuestas
        </Button>
      </form>
      <p className="grey-text">
        Acepto donaciones en 0x8FB40436758Ea9e1a8317f54293Af74be02faFf0
      </p>
      <div className='flex-row'>
        <a href='https://github.com/LucasGrasso/EliminarRtasDeParciales-App'>Repo(App)</a>
        <a href='https://github.com/LucasGrasso/EliminarRtasDeParciales'>Repo(Server)</a>
      </div>
    </div >
  )
}

export default App
