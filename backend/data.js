import bcrypt from 'bcryptjs';

const data = {
    products: [
        {
            //_id: '1',
            name: 'iPhone 14 Pro Max',
            slug: 'iphone-14-pm',
            category: 'phones',
            image: '/images/iphone-14-pm.jpeg',
            price: 1099.99,
            countInStock: 101,
            brand: 'Apple',
            rating: 4.8,
            numReviews: 10,
            description: 'The iPhone 14 Pro 5G Dual SIM comes with a 6.1 inch touchscreen with 460PPI. It packs a 48-megapixel pro camera with main ultra wide system and a 12-megapixel selfie-camera with TrueDepth with autofocus. This is all powered by the Apple A16 Bionic (4 nm) chipset and 6GB of RAM.'
        },
        {
            //_id: '2',
            name: 'iPhone 11',
            slug: 'iphone-11',
            category: 'phones',
            image: '/images/iphone_11.webp',
            price: 249.99,
            countInStock: 123,
            brand: 'Apple',
            rating: 4.4,
            numReviews: 13,
            description: 'The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the 13th generation of iPhone, succeeding the iPhone XR, and was unveiled on September 10, 2019 alongside the iPhone 11 Pro at the Steve Jobs Theater in Apple Park, Cupertino, by Apple CEO Tim Cook. Preorders began on September 13, 2019, and the phone was officially released on September 20, 2019, one day after the official public release of iOS 13.'
        },        
        {
            //_id: '3',
            name: 'iPhone XR',
            slug: 'iphone-xr',
            category: 'phones',
            image: '/images/iphone_XR.webp',
            price: 199.99,
            countInStock: 130,
            brand: 'Apple',
            rating: 4.8,
            numReviews: 10,
            description: 'The iPhone 14 Pro 5G Dual SIM comes with a 6.1 inch touchscreen with 460PPI. It packs a 48-megapixel pro camera with main ultra wide system and a 12-megapixel selfie-camera with TrueDepth with autofocus. This is all powered by the Apple A16 Bionic (4 nm) chipset and 6GB of RAM.'
        },        
        {
            //_id: '4',
            name: 'Pixel 6 pro',
            slug: 'pixel-6-p',
            category: 'phones',
            image: '/images/Pixel_6_Pro.webp',
            price: 1099.99,
            countInStock: 0,
            brand: 'Google',
            rating: 4.8,
            numReviews: 10,
            description: 'The iPhone 14 Pro 5G Dual SIM comes with a 6.1 inch touchscreen with 460PPI. It packs a 48-megapixel pro camera with main ultra wide system and a 12-megapixel selfie-camera with TrueDepth with autofocus. This is all powered by the Apple A16 Bionic (4 nm) chipset and 6GB of RAM.'
        },
        {
            name: 'iPhone 13',
            slug: 'iphone-13',
            category: 'phones',
            image: '/images/iphone_13.webp',
            price: 579.99,
            countInStock: 15,
            brand: 'Apple',
            rating: 4.3,
            numReviews: 10,
            description: "The iPhone 13 and iPhone 13 mini iterate upon the successful iPhone 12 with new cameras and longer battery life. The notch has been reduced in size, and the rear camera module now sits at a diagonal. In addition, the A15 processor brings more speed and efficiency to every task."
        }
    ],
    users: [
        {
            name: 'Jaewon',
            email: 'jaewon.j.1@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'Mustafa',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        }
    ]
}

export default data;