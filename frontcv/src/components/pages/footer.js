import React from 'react'
export default function Footer() {
    return (
       <> 
      
       
<footer class="p-6 flex gap-48 bg-gray-800 content-between ">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Stellar </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <div  class="mr-4 hover:underline md:mr-6 cursor-pointer ">About</div>
        </li>
        <li>
            <div  class="mr-4 hover:underline md:mr-6 cursor-pointer">Privacy Policy</div>
        </li>
        <li>
            <div  class="mr-4 hover:underline md:mr-6 cursor-pointer ">Licensing</div>
        </li>
        <li>
            <div  class="hover:underline cursor-pointer ">Contact</div>
        </li>
    </ul>
</footer>

       
      
    </>
    )
}

