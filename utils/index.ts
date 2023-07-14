import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, fuel, limit } = filters;
    
    // Set the required headers for the API request
    const headers = {
        'X-RapidAPI-Key': '40689b0692mshd81d7d99f39e26fp17e090jsnff3d7a8cb4ae',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const apiUrl = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'

    const response = await fetch(
    `${apiUrl}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
    );
    const result = await response.json();
    return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')
    //daefd14b-9f2b-4968-9e4d-9d4bb4af01d1
    const { make, year, model } = car;
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    return newPathName;
}
