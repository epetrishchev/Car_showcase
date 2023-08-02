'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { yearsOfProduction, fuels } from '@/constants';
import { CarState } from '@/types';
import { fetchCars } from '@/utils'

export default function Home() {
  const [allCars, setallCars] = useState<CarState>([]);
  const [loading, setloading] = useState(false);
  
  //search states
  const [manufacturer, setManuFacturer] = useState('');
  const [model, setModel] = useState('');

  //filter states
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);

  //limit state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setloading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer.toLowerCase() || "",
        year: year || 2022,
        fuel: fuel.toLowerCase() || "",
        limit: limit || 10,
        model: model.toLowerCase() || "",
      });
      setallCars(result);
    } catch (error) {
      console.error()
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);
 
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar
            setManuFacturer={setManuFacturer}
            setModel={setModel}
          />
          <div
            className="home__filter-container"
          >
            <CustomFilter
              options={fuels}
              setFilter={setFuel}
            />
            <CustomFilter
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard
                  key={`car-${index}`}
                  car={car}
                   />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          !loading && (        
            <div className="home__error-container">
              <h2 className="text-black text-xl
               font-bold">Oops, no results</h2>
              <p>{ allCars?.message }</p>
            </div>
            )
        )}
      </div>
    </main>
  )
}
