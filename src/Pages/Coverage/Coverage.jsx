import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';
import { IoIosSearch } from "react-icons/io";

const Coverage = () => {
    const position = [23.684994, 90.356331]
    const locations = useLoaderData()
    return (
        <div className='-z-1 md:p-10 bg-white'>
            {/* titile  */}
            <h1 className='text-4xl font-bold text-center'>We are Available in 64 District</h1>
            {/* search box  */}
            <div className="join flex items-center justify-center my-10 w-full">
                <div>
                    <form action="">
                        <label className="input w-[300px] md:w-xl lg:w-2xl validator join-item flex items-center gap-2 rounded-l-2xl">
                            <IoIosSearch className="text-xl opacity-50" />
                            <input
                                type="email"
                                placeholder="Search your Location"
                                required />
                        </label>
                    </form>
                </div>
                <button className="btn btn-primary text-black font-bold join-item rounded-r-2xl">Search</button>
            </div>
            {/* map  */}
            <div className='w-auto mx-auto h-[800px] p-4'>
                <MapContainer
                    className='h-full w-ful'
                    scrollWheelZoom={false}
                    zoom={9}
                    center={position}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        locations.map((location, index) => {
                            return <Marker
                                key={index}
                                position={[location.latitude, location.longitude]}>
                                <Popup>
                                    <strong>{location.district}</strong> <br />
                                    Service Area : {location.covered_area.join(', ')}
                                </Popup>
                            </Marker>
                        })
                    }

                </MapContainer>
            </div>
        </div >
    );
};

export default Coverage;