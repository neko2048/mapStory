import React from "react";
import "./style/header.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer class="container mx-auto bg-white py-8 border-t border-gray-400 ">
            <div class="container flex px-3 py-8 ">
                <div class="w-full mx-auto flex flex-wrap">
                    <div class="flex w-full lg:w-1/2 ">
                        <div class="px-3 md:px-0">
                            <h3 class="font-bold text-gray-900">About</h3>
                            <p class="py-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia. 
                                <Link to={"/About"}> [Click to see more]</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}