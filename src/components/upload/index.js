import React, { useEffect, useState, useMemo} from 'react'
import { useDropzone } from 'react-dropzone'
import { Content, Images, Galery} from './style'

export default function Upload(){
 
    const [files, setFiles] = useState([])
    const { getInputProps, getRootProps } = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles =>{
        setFiles(files =>
          [...files, ...acceptedFiles.map(file =>Object.assign(file,{
            preview: URL.createObjectURL(file)}
          ))]
         )
      }
    })
    
    useEffect(
      () => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview))
      }
    )

    const acceptedFilesItems = useMemo(() => files?.map((file, i) => (
       <Images>
            <div key={file.name}>
              <img alt="" src={file.preview} />
                <li key={file.name}>{file.name}</li>
            </div>
        </Images>
     
     )), [files])
     
     
     return (
         <>
            <Content>
              <h1>Upload de Imagens</h1>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                      <p>Solte seus aquivos aqui!</p>
                  </div>
            </Content>
            <Galery>
                {acceptedFilesItems}
            </Galery>
        </>
    )
  }

