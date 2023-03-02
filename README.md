<p align="center">
  <img src="https://borraryestudiar.lucasgrasso.com.ar/logo.png" style="width:200px;height;200px"/>
</p>
<h1 align="center">EliminarRtasdeParciales</h1>

![react](https://img.shields.io/badge/React.js-61DBFB?style=for-the-badge&logo=react&logoColor=black)
![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white)

https://borraryestudiar.lucasgrasso.com.ar/  

WebApp interfaz para la API [EliminarRtasdeParciales](https://github.com/LucasGrasso/EliminarRtasDeParciales)
 
Borra respuestas y subrayado.

 __El PDF DEBE ser de texto, sino el progama no funciona correctamente__  
 
 ## Ejemplos:  
 [Parcial Con respuestas](https://borraryestudiar.lucasgrasso.com.ar/pruebas/Parcial_ICSEValdez.pdf)(Pasandole que borre V,F,X,GE,TE,II,IF)  
 [Parcial Sin respuestas](https://borraryestudiar.lucasgrasso.com.ar/pruebas/Parcial_ICSEValdez_SinCorrecciones.pdf)
_Creditos a la catedra Valdez de ICSE(Introducción al Conocimiento de la Sociedad y Estado), CBC/UBAXXI UBA, por los parciales usados para ejemplificar el uso de la aplicación_

## ¿Como Contribuir?
 [Crea un fork](https://docs.github.com/es/get-started/quickstart/fork-a-repo) del proyecto y agrega tus presets de respuestas a borrar de un parcial de una materia en ``` 'src/utils/presets.ts' ``` (Trata de que sean lo mas generales posibles). Luego, hace una [Pull request](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
 
 En el siguiente Formato:
 ```json
  {
  ...
  "Materia(Universidad)": "Rta1,Rta2,...RtaN",
  ...
  }
 ```
 
 __¡Con tu ayuda podemos facilitarle el estudio a mas personas!__
