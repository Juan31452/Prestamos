import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Voz = () => {
  const [activo, setActivo ] = useState(false);
  const [message, setMessage] = useState('');

  const commands = [
    {
      command: 'clientes',
      callback: () => window.location.replace('/clientes')
    },
    {
      command: 'borrar',
      //callback: () => setMessage('?')
      //resetTranscript
    },
    {
      command: 'Hola',
      callback: () => setMessage('Hola que tal!')
    },
    {
      command: 'préstamos',
      callback: () => window.location.replace('/prestamos')
    },
    {
      command: 'inicio',
      callback: () => window.location.replace('/inicio')
    },


  ]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsContinuousListening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  
  const stopListening = () => {
    SpeechRecognition.stopListening();
  };
  
  if (!browserSupportsSpeechRecognition) {
    return <span>Navegador no soporta el reconicimiento voz.</span>;
  }
  console.log(activo)
  

  if (browserSupportsContinuousListening) {
    SpeechRecognition.startListening({ continuous: true })
  } else {
    // Fallback behaviour
  }

    if (activo === true)
    {
      //codigo...
    }
    
  

  return (
    <div>
    <button onClick={SpeechRecognition.startListening}>Comenzar</button>
    <button onClick={resetTranscript}>Limpiar</button>
      
    <p>{transcript}</p>
    <p>{message}</p>

    </div>
  )
}

export default Voz
