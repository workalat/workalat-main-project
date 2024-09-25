import Image from "next/image";

export default function CategoryGrids() {
    // demo data
    const services = [
        {
            src: '/images/cleaning.png',
            alt: 'Cleaning',
            title: 'Cleaning',
            description: 'Get professional cleaning service swiftly anytime you want.'
        },
        {
            src: '/images/graphic_designer.png',
            alt: 'Graphics Design',
            title: 'Graphics Design',
            description: 'Creative designs to give your brand a unique presence.'
        },
        {
            src: '/images/dry_clean.png',
            alt: 'Dry Cleaning',
            title: 'Dry Cleaning',
            description: 'High-quality dry cleaning services to care for your garments.'
        },
        {
            src: '/images/web_development.png',
            alt: 'Web Development',
            title: 'Web Development',
            description: 'Modern web solutions to enhance your digital footprint.'
        },
        {
            src: '/images/cleaning.png',
            alt: 'Cleaning',
            title: 'Cleaning',
            description: 'Get professional cleaning service swiftly anytime you want.'
        },
        {
            src: '/images/graphic_designer.png',
            alt: 'Graphics Design',
            title: 'Graphics Design',
            description: 'Creative designs to give your brand a unique presence.'
        },
        {
            src: '/images/dry_clean.png',
            alt: 'Dry Cleaning',
            title: 'Dry Cleaning',
            description: 'High-quality dry cleaning services to care for your garments.'
        },
        {
            src: '/images/web_development.png',
            alt: 'Web Development',
            title: 'Web Development',
            description: 'Modern web solutions to enhance your digital footprint.'
        },
        {
            src: '/images/cleaning.png',
            alt: 'Cleaning',
            title: 'Cleaning',
            description: 'Get professional cleaning service swiftly anytime you want.'
        },
        {
            src: '/images/graphic_designer.png',
            alt: 'Graphics Design',
            title: 'Graphics Design',
            description: 'Creative designs to give your brand a unique presence.'
        },
        {
            src: '/images/dry_clean.png',
            alt: 'Dry Cleaning',
            title: 'Dry Cleaning',
            description: 'High-quality dry cleaning services to care for your garments.'
        },
        {
            src: '/images/web_development.png',
            alt: 'Web Development',
            title: 'Web Development',
            description: 'Modern web solutions to enhance your digital footprint.'
        }
    ];
    return (
        <div className='py-12'>
            <h3 className='text-2xl font-bold pb-5 text-start'>Popular Categories</h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {services.map((service, index) => (
                    <div key={index} className='flex flex-col items-start'>
                        <Image src={service.src} alt={service.alt} className='rounded-md h-[220px] object-cover' width={500} height={300} />

                        <h1 className='text-sm lg:text-base font-bold mt-3 text-start'>
                            {service.title}
                        </h1>

                        <div className='w-full h-[1px] bg-gray-400 my-2'></div>

                        <p className='text-xs lg:text-sm text-gray-600 text-start'>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}