<template>
    <div class="bg-primaryBlack text-white py-8 pb-16 pl-32 z-0 font-serif relative">
        <div class="sm:w-[60%] w-full">
            <div class="text-sm text-gray-300 mb-4 font-bold">
                <a href="#" class="hover:underline mr-2">IT & Software</a> >
                <a href="#" class="hover:underline mx-2">IT Certifications</a> >
                <a href="#" class="hover:underline mx-2">Cisco Packet Tracer</a>
            </div>

            <h1 class="text-3xl font-bold mb-4">
                Cisco CCNA Packet Tracer Ultimate labs: CCNA 200-301 labs
            </h1>

            <p class="text-lg mb-6">
                Are you ready for the new Cisco CCNA 200-301 exam? You sure? Check your knowledge with our CCNA Exam Prep Labs.
            </p>

            <div class="flex items-center mb-4">
                <span class="bg-primaryYellow text-black font-bold text-xs px-2 py-1 rounded mr-4">Bestseller</span>
                <span class="text-yellow-400 font-semibold">4.8</span>
                <svg class="w-5 h-5 text-yellow-400 mx-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <a href="#" class="text-blue-400 underline">7,938 ratings</a>
                <span class="mx-2 text-gray-400">|</span>
                <span class="text-gray-400">92,429 students</span>
            </div>

            <div class="text-sm text-gray-400 mb-2">
                Created by <a href="#" class="text-blue-400 underline">David Bombal</a>
            </div>

            <div class="flex items-center text-sm text-gray-400">
                <span class="flex items-center mr-4">
                <svg class="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 7v5h5"></path>
                </svg>
                Last updated 9/2024
                </span>
                <span class="flex items-center mr-4">
                <svg class="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 4h18v2H3zM3 8h18v2H3zM3 12h18v2H3zM3 16h18v2H3zM3 20h18v2H3z"></path>
                </svg>
                English
                </span>
                <span class="flex items-center">
                <a href="#" class="text-blue-400 underline">7 more</a>
                </span>
            </div>
        </div>
        <CourseCard :showImage="true"/>
    </div>

</template>