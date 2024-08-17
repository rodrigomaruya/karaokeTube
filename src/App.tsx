
import './App.css'
import Header from './components/Header'
import VideosList from './components/VideosList/VideosList'
import Provider from './context/Provider'



function App() {
  

  return (
    <Provider>
      <Header/>
      <VideosList />
    </Provider>
  )
}

export default App
