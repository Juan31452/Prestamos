import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Inicio = () => {
  const [message, setMessage] = useState('');
  const [activo, setActivo ] = useState(false);

  const commands = [
    {
      command: 'clientes',
      callback: () => window.location.replace('/clientes')
    },
    {
      command: 'limpiar',
      callback: () => setMessage('?')
    },
    {
      command: 'Hola',
      callback: () => setMessage('Hola que tal!')
    },
    {
      command: 'on',
      callback: () => startListening()
    },

  ]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });
  

  const startListening = () => {
    resetTranscript();
    setMessage();
    SpeechRecognition.startListening({
      // Comandos no funcionan con es-HN
      // language: "es-HN",
      continuous: true,
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };
  
  if (!browserSupportsSpeechRecognition) {
    return <span>Navegador no soporta el reconicimiento voz.</span>;
  }

  
  return (
    <div>
      <h1>Bienvenidos</h1>

      <p>Microfone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Comenzar</button>
      <button onClick={SpeechRecognition.stopListening}>Detener</button>
      <button onClick={resetTranscript}>Limpiar</button>
      <p>{transcript}</p>
      <p>{message}</p>

    </div>
   


  )
}

export default Inicio
