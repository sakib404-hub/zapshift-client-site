import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';
import { IoIosSearch } from "react-icons/io";
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Coverage = () => {
    const position = [23.684994, 90.356331]
    const locations = useLoaderData()
    const mapRef = useRef(null);



    const handleSearchlocation = (event) => {
        console.log('Button is clicked!');
        event.preventDefault();
        const search = event.target.search.value;
        const district = locations.find((c) => c.district.toLowerCase().includes(search.toLowerCase()))
        console.log(district);
        if (district) {
            const co_ordinate = [district.latitude, district.longitude]
            mapRef.current.flyTo(co_ordinate, 14)
        }
        else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "No Place Found!",
                text: "Please try searching again.",
                showConfirmButton: false,
                timer: 1500
            });
            event.target.reset();
        }
    }
    return (
        <div className='-z-1 md:p-10 bg-white'>
            {/* titile  */}
            <h1 className='text-4xl font-bold text-center'>We are Available in 64 District</h1>
            {/* search box  */}
            <form
                onSubmit={handleSearchlocation}>
                <div className="join flex items-center justify-center my-10 w-full">
                    <div>
                        <label
                            htmlFor='search'
                            className="input w-[300px] md:w-xl lg:w-2xl validator join-item flex items-center gap-2 rounded-l-2xl">
                            <IoIosSearch className="text-xl opacity-50" />
                            <input
                                type="text"
                                name='search'
                                placeholder="Search your Location"
                            />
                        </label>

                    </div>
                    <button
                        type='submit'
                        className="btn btn-primary text-black font-bold join-item rounded-r-2xl">Search</button>
                </div>
            </form>
            {/* map  */}
            <div className='w-auto mx-auto h-[600px] p-4'>
                <MapContainer
                    className='h-full w-ful'
                    scrollWheelZoom={false}
                    zoom={9}
                    ref={mapRef}
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