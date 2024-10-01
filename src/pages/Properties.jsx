// import React from 'react';
import { Link } from 'react-router-dom';

const properties = [
    {
      id: 1,
      name: 'Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$3,500,000',
      bedrooms: 5,
      bathrooms: 4,
      size: '5000 sqft',
      county: 'Los Angeles County',
      subdivision: 'Beverly Estates',
      description: 'A luxurious villa located in the heart of Beverly Hills with stunning views and modern amenities.',
      imageUrl: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600',
      photos: [
        'https://media.istockphoto.com/id/1470717532/photo/modern-home-interior.jpg?s=612x612&w=0&k=20&c=u-bCaUUW50Z_FzkQJ7JBDmLfSNFtDHliDpl1rG0MXCA=',
        'https://media.istockphoto.com/id/1456467041/photo/beautiful-kitchen-in-new-farmhouse-style-luxury-home-with-island-pendant-lights-and-hardwood.jpg?s=612x612&w=0&k=20&c=wwlKjbAsf_xBveRuqMV2fCJ8cpED0CoXE4GdIUSxpW8=',
        'https://media.istockphoto.com/id/1221362919/photo/white-bathroom-with-bath-and-large-window.jpg?s=612x612&w=0&k=20&c=r7TzhDH5UZ4gLhC6QopMbUVSz1fEPAiDfg5uQwsiCNc=',
        'https://media.istockphoto.com/id/1249291021/photo/beautiful-bedroom-with-gray-furniture.jpg?s=612x612&w=0&k=20&c=KlPKQFTnP2P-Bg-c9-Ig1aDLO0ODfkF6-bFef9Dlibo=',
        'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
    },
    {
      id: 2,
      name: 'Modern Apartment',
      location: 'New York, NY',
      price: '$1,200,000',
      bedrooms: 3,
      bathrooms: 2,
      size: '1800 sqft',
      county: 'New York County',
      subdivision: 'Manhattan Towers',
      description: 'A stunning modern apartment in the city center with easy access to landmarks and amenities.',
      imageUrl: 'https://example.com/apartment.jpg',
      photos: [
        'https://media.istockphoto.com/id/1373329869/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=VBzd-UExnctNDY9rfqUc5Ys8IUyBmELYT0R2SSZ1_L4=',
        'https://media.istockphoto.com/id/1297586166/photo/modern-elegant-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=4qVGJq3EZ-DrVC08kFIXuZMGRe5NcEvziV-H4L9aFKc=',
        'https://media.istockphoto.com/id/1082907946/photo/brown-and-orange-pillows-on-white-bed-in-natural-bedroom-interior-with-wicker-lamp-and-wooden.jpg?s=612x612&w=0&k=20&c=sw85EQJBPisYli3IaKh84ZKLjttL05jlPLKs9211zno=',
        'https://media.istockphoto.com/id/1208210864/photo/master-bathroom-interior-in-new-farmhouse-style-luxury-home-large-mirror-shower-and-bathtub.jpg?s=612x612&w=0&k=20&c=M8KDfVPxNNj1csVIhCS4wUWJzXHol8bVf5-HQOtbv5s=',
        'https://example.com/room6.jpg',
      ],
    },
    {
      id: 3,
      name: 'Charming Cottage',
      location: 'Aspen, CO',
      price: '$1,800,000',
      bedrooms: 4,
      bathrooms: 3,
      size: '2500 sqft',
      county: 'Pitkin County',
      subdivision: 'Aspen Meadows',
      description: 'A charming cottage nestled in the woods, perfect for a peaceful getaway with stunning mountain views.',
      imageUrl: 'https://example.com/cottage.jpg',
      photos: [
        'https://media.istockphoto.com/id/1476189571/photo/living-room-with-fireplace.jpg?s=612x612&w=0&k=20&c=QL5xiw4GvHWoKIRC1KXkgeBMhCwmVxRZ68PV013Yh7M=',
        'https://media.istockphoto.com/id/1398693404/photo/beautiful-kitchen-in-new-luxury-home-with-island-pendant-lights-and-hardwood-floors.jpg?s=612x612&w=0&k=20&c=Q44P-Jy5nbhTY1sUrrnpSPep3UsORVYDL7Ud4jLBbHA=',
        'https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=jYMbmLtLDOezPThalkXCfrKjbgkYHpQX2oY3-vjPhVI=',
        'https://media.istockphoto.com/id/1308282338/photo/modern-bathroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=r6qXSudX7P7YOzYsuHsQ_6pjAekJOF4XnEpdrtfqmsg=',
        'https://example.com/cottage_room3.jpg',
      ],
    },
    {
      id: 4,
      name: 'Spacious Family Home',
      location: 'Orlando, FL',
      price: '$450,000',
      bedrooms: 4,
      bathrooms: 2,
      size: '2800 sqft',
      county: 'Orange County',
      subdivision: 'Sunset Hills',
      description: 'A spacious family home with a large backyard, perfect for kids and entertaining guests.',
      imageUrl: 'https://media.istockphoto.com/id/479767332/photo/idyllic-home-with-covered-porch.jpg?s=612x612&w=0&k=20&c=noFe8bNIsnAoGNJXMepSVVrNGhEior2Y0wZcROB94Uw=',
      photos: [
        'https://media.istockphoto.com/id/1441823016/photo/modern-living-room-interior-design.jpg?s=612x612&w=0&k=20&c=pxP09YM-4w7u1YyTVUmQb6zBWlh_thP7QSp-CKMhfAs=',
        'https://media.istockphoto.com/id/1398692674/photo/beautiful-kitchen-in-new-luxury-home-with-waterfall-quartz-island-pendant-lights-and-hardwood.jpg?s=612x612&w=0&k=20&c=vgNFmlUAIuhf-Cr5_BDPIU-KssDOsPx2VzsppmZJ9Ow=',
        'https://media.istockphoto.com/id/1355535668/photo/scandinavian-bedroom-in-a-luxurious-cottage-house.jpg?s=612x612&w=0&k=20&c=4Y_sypzQntmCSKA52USGRsvH7QdLeL_0hszRhGFJjoY=',
        'https://media.istockphoto.com/id/1221362919/photo/white-bathroom-with-bath-and-large-window.jpg?s=612x612&w=0&k=20&c=r7TzhDH5UZ4gLhC6QopMbUVSz1fEPAiDfg5uQwsiCNc=',
        'https://example.com/family_room3.jpg',
      ],
    },
    {
      id: 5,
      name: 'Elegant Condo',
      location: 'Chicago, IL',
      price: '$750,000',
      bedrooms: 2,
      bathrooms: 2,
      size: '1400 sqft',
      county: 'Cook County',
      subdivision: 'Downtown Chicago',
      description: 'An elegant condo with city skyline views, featuring high-end finishes and modern amenities.',
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      photos: [
        'https://media.istockphoto.com/id/1284941025/photo/digitally-rendered-view-of-a-beautiful-living-room.jpg?s=612x612&w=0&k=20&c=mGHeCikkqOoHbGEQQigXvJmE1lW67zY0zo4NypkKGmQ=',
        'https://media.istockphoto.com/id/1276740266/photo/white-bar-stools-at-kitchen-island.jpg?s=612x612&w=0&k=20&c=Rfx1RQEV9c_KGvtLYtMB7dixSAHoNWNcgqgWsqFxvrQ=',
        'https://media.istockphoto.com/id/1263031453/photo/beautiful-bedroom-windows-and-ceiling-fan.jpg?s=612x612&w=0&k=20&c=10itSsL08KJZovWwxjsCyECxr7AIzCkiaFHYP7YUN-w=',
        'https://media.istockphoto.com/id/1435046384/photo/the-bath-and-toilet-on-bathroom-japanese-wabi-sabi-style-3d-rendering.jpg?s=612x612&w=0&k=20&c=jxtCWA9bRRXvIz1wr1R6KHoI5wF689XqTHJHOD9EJnw=',
        'https://example.com/condo_room3.jpg',
      ],
    },
    {
      id: 6,
      name: 'Beachfront Property',
      location: 'Miami, FL',
      price: '$2,200,000',
      bedrooms: 5,
      bathrooms: 4,
      size: '4000 sqft',
      county: 'Miami-Dade County',
      subdivision: 'Sunny Isles',
      description: 'A luxurious beachfront property with direct ocean access and panoramic views.',
      imageUrl: 'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=600',
      photos: [
        'https://media.istockphoto.com/id/928768406/photo/modern-rustic-coastal-home.jpg?s=612x612&w=0&k=20&c=IpXOzgDv8heTpSa4JkL51LhiHpXrruIpxvLvak-y0r8=',
        'https://media.istockphoto.com/id/182839964/photo/interior-beachhouse-kitchen-diningroom-with-beach-view.jpg?s=612x612&w=0&k=20&c=KefveBOUnriIiFfodTlpFNXp5LLqHc7LcQOAJEBxGro=',
        'https://media.istockphoto.com/id/507832553/photo/modern-bedroom-overlooking-ocean.jpg?s=612x612&w=0&k=20&c=JrDybl1_-D_1qGuqbrMzmgOUfAk4R8mCIKSMnPQrYuY=',
        'https://media.istockphoto.com/id/173000265/photo/contemporary-bathroom-bathtub.jpg?s=612x612&w=0&k=20&c=ORvIhsMlaTdulQT8rk5iQ9uIBncH2-jBQYrP2KnwI2E=',
        'https://media.istockphoto.com/id/493983215/photo/dining-room-in-luxury-home.jpg?s=612x612&w=0&k=20&c=aRIOljPLXT2OdTj7LjtO6rquYq0w_Ntv3tT4yAZ86R8=',
       
      ],
    },
  ];


const PropertiesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="text-center py-10">
      <h1
            className="text-5xl font-extrabold text-[#fe8e3c] underline decoration-black mb-5"
            style={{ textUnderlineOffset: "5px" }}
          > Exclusive Properties </h1>
        <p className="text-black text-xl mt-2">Find your dream property with us</p>
      </header>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 lg:px-20 pb-10">
        {properties.map((property) => (
          <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src={property.imageUrl} alt={property.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#fe8e3c]">{property.name}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-gray-800 font-bold">{property.price}</p>
              <div className="flex justify-center mt-4">
                <Link to={`/property/${property.id}`} state={property}>
                  <button className="inline-flex items-center px-6 py-2 text-lg font-bold text-center text-white bg-[#fe8e3c] rounded-3xl hover:bg-[#fcd443] focus:ring-4 focus:outline-none focus:ring-[#fe8e3c] transition duration-300 ease-in-out">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
