import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import FileFormInput from './components/FileFormInput'
import TextFormInput from './components/TextFormInput'
function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [fileName, setFileName] = useState<string>('Tu PDF')
  const [searchStrings, setSearchStrings] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [blobURL, setBlobUrl] = useState('');


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file)
      setFileName(file.name)
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
    fetch('http://127.0.0.1:8000/eraseAnswers', {
      method: "POST",
      credentials: "include",
      body: formData,
    }).then(res => res.blob())
      .then(blob => {
        setBlobUrl(URL.createObjectURL(blob));
        setLoading(false);
        console.log(blob);
      })
      .catch(err => {
        setLoading(false)
        console.log(err);
        alert(`Error; ${err}`)
      });

  }

  return (
    <div className="App">
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
    </div >
  )
}

export default App
