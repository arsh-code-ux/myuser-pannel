import './App.css'
import './index.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { MyInformation } from './components/MyInformation'
import { MyAddress } from './components/MyAddress'
import { MyPurchases } from './components/MyPurchases'
import { MyStore } from './components/MyStore'
import { ExhibitionsPage } from './components/ExhibitionsPage'
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
          <BestsellerProducts />
          <ArtworkGallery />
          <FeaturedArtists />
          <GalleriesSection />
          <CollectionsSection />
          <ConversationsSection />
          <Footer />
        </>
      )}
      
      {currentPage === 'exhibitions' && (
        <ExhibitionsPage />
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
      
      {currentPage === 'my-purchases' && (
        <>
          <MyPurchases />
          <Footer />
        </>
      )}
      
      {currentPage === 'my-store' && (
        <>
          <MyStore />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
