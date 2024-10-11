import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle";

const data = [
    // Phones
    {
        id: 1,
        image: '/products/iphone-11.jpg',
        title: 'iPhone 11',
        category: 'phones',
        price: '60000',
        discountPrice: '55000',
    },
    {
        id: 2,
        image: '/products/galaxyS21.jpg',
        title: 'Samsung Galaxy S21',
        category: 'phones',
        price: '70000',
        discountPrice: '65000',
    },
    {
        id: 3,
        image: '/products/pixel5.jpg',
        title: 'Google Pixel 5',
        category: 'phones',
        price: '50000',
        discountPrice: '45000',
    },
    {
        id: 4,
        image: '/products/oneplus9.png',
        title: 'OnePlus 9',
        category: 'phones',
        price: '55000',
        discountPrice: '50000',
    },
    {
        id: 5,
        image: '/products/xiaomiMi11.jpg',
        title: 'Xiaomi Mi 11',
        category: 'phones',
        price: '60000',
        discountPrice: '57000',
    },
    
    // Laptops
    {
        id: 6,
        image: '/products/macbookPro.jpg',
        title: 'MacBook Pro 16"',
        category: 'laptops',
        price: '200000',
        discountPrice: '190000',
    },
    {
        id: 7,
        image: '/products/dellXPS13.jpg',
        title: 'Dell XPS 13',
        category: 'laptops',
        price: '120000',
        discountPrice: '110000',
    },
    {
        id: 8,
        image: '/products/lenovoThinkpad.jpg',
        title: 'Lenovo ThinkPad X1',
        category: 'laptops',
        price: '140000',
        discountPrice: '130000',
    },
    {
        id: 9,
        image: '/products/hpSpectre.jpg',
        title: 'HP Spectre x360',
        category: 'laptops',
        price: '130000',
        discountPrice: '125000',
    },
    {
        id: 10,
        image: '/products/asusZenbook.jpg',
        title: 'Asus ZenBook 14',
        category: 'laptops',
        price: '110000',
        discountPrice: '100000',
    },
    
    // Accessories
    {
        id: 11,
        image: '/products/appleAirPods.jpg',
        title: 'Apple AirPods Pro',
        category: 'accessories',
        price: '25000',
        discountPrice: '23000',
    },
    {
        id: 12,
        image: '/products/samsungGalaxyBuds.jpg',
        title: 'Samsung Galaxy Buds',
        category: 'accessories',
        price: '15000',
        discountPrice: '14000',
    },
    {
        id: 13,
        image: '/products/ankerPowerbank.jpg',
        title: 'Anker Power Bank',
        category: 'accessories',
        price: '5000',
        discountPrice: '4500',
    },
    {
        id: 14,
        image: '/products/logitechMouse.jpg',
        title: 'Logitech Wireless Mouse',
        category: 'accessories',
        price: '3000',
        discountPrice: '2500',
    },
    {
        id: 15,
        image: '/products/usbCCharger.jpg',
        title: 'USB-C Charger',
        category: 'accessories',
        price: '2000',
        discountPrice: '1800',
    },
    {
        id: 16,
        image: '/products/razerGamingHeadset.jpg',
        title: 'Razer Gaming Headset',
        category: 'accessories',
        price: '12000',
        discountPrice: '11000',
    },
    {
        id: 17,
        image: '/products/samsungCharger.jpg',
        title: 'Samsung Fast Charger',
        category: 'accessories',
        price: '1500',
        discountPrice: '1200',
    },
    {
        id: 18,
        image: '/products/mousepad.jpg',
        title: 'Gaming Mouse Pad',
        category: 'accessories',
        price: '1500',
        discountPrice: '1200',
    },
    {
        id: 19,
        image: '/products/phoneCase.jpg',
        title: 'Phone Case',
        category: 'accessories',
        price: '800',
        discountPrice: '600',
    },
    {
        id: 20,
        image: '/products/laptopBag.jpg',
        title: 'Laptop Bag',
        category: 'accessories',
        price: '3000',
        discountPrice: '2500',
    }
];



export default function BestSeller(){

    const products = data.slice(0,8)

    return (
        <div className="mt-20">
            <SectionTitle title='Best Seller' subTitle=""/>
            <div className="grid grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-4">
                {products.map(e=><ProductCard key={e.id} product={e}/>)}
            </div>
        </div>
    )
}