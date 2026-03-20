import './App.css'
import './index.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { MyInformation } from './components/MyInformation'
import { MyAddress } from './components/MyAddress'
import { FeaturedExhibition } from './components/FeaturedExhibition'
import { BestsellerProducts } from './components/BestsellerProducts'
import { ArtworkGallery } from './components/ArtworkGallery'
import { FeaturedArtists } from './components/FeaturedArtists'
import { ConversationsSection } from './components/ConversationsSection'
import { GalleriesSection } from './components/GalleriesSection'
import { CollectionsSection } from './components/CollectionsSection'
import { Footer } from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="bg-white">
      <Header onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <FeaturedExhibition />
          <BestsellerProducts />
          <ArtworkGallery />
          <FeaturedArtists />
          <GalleriesSection />
          <CollectionsSection />
          <ConversationsSection />
          <Footer />
        </>
      )}
      
      {currentPage === 'my-information' && (
        <>
          <MyInformation />
          <Footer />
        </>
      )}
      
      {currentPage === 'my-address' && (
        <>
          <MyAddress />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
