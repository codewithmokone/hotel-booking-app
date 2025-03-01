import React, { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import Header from '../components/HeroSec';
import Footer from '../components/Footer';
import Cards from '../components/cards/Cards';
import SearchCard from '../components/cards/SearchCard';
import Service from '../components/Service';
import FeaturedRooms from '../components/FeaturedRooms';
import Navbar from '../components/navbar/Navbar';
import { Box, Hidden } from '@mui/material';

export const Home = () => {

  const [searchResults, setSearchResults] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const filterRoom = async () => {
    setIsLoading(true)

    try {
      const querySnapshot = await getDocs(
        query(collection(db, 'hotelRooms'),
          where('price', '>=', parseInt(minPrice)),
          where('price', '<=', parseInt(maxPrice)),
        )
      );

      const filteredData = querySnapshot.docs.map((doc) => doc.data());

      setSearchResults(filteredData)
    } catch (err) {
      console.log("Error fetching data:", err)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <Box
      sx={{
        width: { xs: 400, sm: 786, md: 1024 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "auto",
        backgroundColor: 'whitesmoke',
      }}
      className='h-auto'
    >
      <Box sx={{ width: { xs: 400, sm: 786, md: 1024 } }}>
        <Navbar />
        <Header />
      </Box>
      <Box
        sx={{
          width: { xs: 400, sm: 786, md: 1024 },
        }}
        className=" flex flex-col justify-center items-center">
        <Box sx={{
          width: { xs: 400, sm: 786, md: 1024 },
          height: 60,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#24252A'
        }}
        >
          <Hidden smDown>
            <Box sx={{ width: { sm: 600 }, height: 40, display: 'flex', flexDirection: { sm: "row", md: 'row' } }} className="search-section rounded flex justify-between items-center border bg-white">
              <input
                className=' ml-[40px] border-[#0088a9] rounded focus:outline-none focus:ring focus:ring-[#0088a9] w-[205px]'
                type="number"
                value={minPrice}
                placeholder='Enter minimum amount'
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                className='ml-[40px] border-[#0088a9] rounded focus:outline-none focus:ring focus:ring-[#0088a9] w-[205px]'
                type="number"
                value={maxPrice}
                placeholder='Enter maximum amount'
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <button
                className="bg-[#0088a9] text-white p-1 rounded ml-[45px]"
                onClick={filterRoom}>Search</button>
            </Box>
          </Hidden>
          <Hidden smUp>
            <Box sx={{ width: { xs: 400 }, height: 40, display: 'flex', flexDirection: { sm: "row", md: 'row' }, alignItems: 'center', justifyContent: "center" }} className="search-section rounded flex justify-between items-center">
              <input
                className=' border-[#0088a9] rounded focus:outline-none focus:ring focus:ring-[#0088a9] w-[150px]'
                type="number"
                value={minPrice}
                placeholder=' Minimum amount'
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                className='ml-[10px] border-[#0088a9] rounded focus:outline-none focus:ring focus:ring-[#0088a9] w-[150px]'
                type="number"
                value={maxPrice}
                placeholder=' Maximum amount'
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <button
                className="bg-[#0088a9] text-white p-1 rounded ml-[6px]"
                onClick={filterRoom}>Search</button>
            </Box>
          </Hidden>
        </Box>
        <Box
          sx={{
            height: { sm: 'auto', md: 'auto' },
            backgroundColor: 'white',
          }}
        >
          <Box
            sx={{
              height: { sm: 'auto', md: 'auto' },
              marginTop: { sm: -6, md: 0 }
            }}
          >
            <FeaturedRooms />
          </Box>
          <Box
            sx={{
              width: { xs: 400, sm: 786, md: 1024 },
              height: { xs: 800, sm: 'auto', md: 'auto' },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              margin: "auto",
              marginTop: { sm: -2, md: 0 },
              marginBottom: { sm: 6, md: 6 }
            }}
          >
            <Box
              sx={{
                width: { xs: 400, sm: '100%', md: 350 },
                height: { xs: 200, sm: 400, },
                marginLeft: { sm: 0, md: 0 }
              }}
            >
              <div class="mapouter my-5 mt-4">
                <div className="gmap_canvas">
                  <iframe className="gmap_iframe"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=307&amp;height=600&amp;hl=en&amp;q=pretoria cbd&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  </iframe><a href="https://embed-googlemap.com" className='border-none'></a>
                </div>
              </div>
            </Box>
            <Box
              sx={{
                width: { sm: '100%', md: 700 },
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'column' },
                marginRight: { xs: 0, sm: 0, md: 0 },
                marginTop: { xs: 0, sm: -20, md: 0 }
              }}
            >
              {searchResults.length ?
                <SearchCard searchResults={searchResults} />
                :
                <Cards />
              }
            </Box>
          </Box>
          <div>
            <Service />
          </div>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>

    </Box>
  )
}
export default Home;
