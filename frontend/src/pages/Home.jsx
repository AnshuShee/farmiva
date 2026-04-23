import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="font-body-md text-body-md min-h-screen flex flex-col bg-background text-on-background">
      {/* TopNavBar */}
      <nav className="bg-white/95 dark:bg-stone-950/95 backdrop-blur-md text-emerald-800 dark:text-emerald-400 font-sans antialiased tracking-tight fixed top-0 w-full z-50 border-b border-stone-200/50 dark:border-stone-800/50 shadow-[0_4px_20px_rgba(45,106,79,0.08)]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-16 px-8">
          <div className="text-2xl font-bold text-emerald-900 dark:text-emerald-50 tracking-tighter">
            Farmiva
          </div>
          <div className="hidden md:flex space-x-8">
            <a className="text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-700 font-semibold pb-1 hover:bg-stone-50 dark:hover:bg-stone-900 transition-all duration-200 active:scale-95 transform" href="#">Home</a>
            <a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 hover:bg-stone-50 dark:hover:bg-stone-900 transition-all duration-200 active:scale-95 transform" href="#">How it works</a>
            <a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 hover:bg-stone-50 dark:hover:bg-stone-900 transition-all duration-200 active:scale-95 transform" href="#">For Farmers</a>
            <a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 hover:bg-stone-50 dark:hover:bg-stone-900 transition-all duration-200 active:scale-95 transform" href="#">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="font-label-md text-label-md text-primary hover:bg-stone-50 dark:hover:bg-stone-900 transition-all duration-200 active:scale-95 transform px-4 py-2 rounded-DEFAULT">Login</button>
            <Link to="/signup" className="font-label-md text-label-md bg-primary text-on-primary hover:bg-stone-50 dark:hover:bg-stone-900 transition-all duration-200 active:scale-95 transform px-4 py-2 rounded-DEFAULT shadow-sm">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-margin py-xl flex flex-col md:flex-row items-center gap-lg">
          <div className="md:w-1/2 space-y-md">
            <h1 className="font-h1 text-h1 text-primary">Farm-fresh, at your door</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">We partner with local organic farms to bring you the highest quality produce, carefully selected and delivered with care.</p>
            <div className="flex flex-col sm:flex-row gap-xs mt-lg">
              <div className="relative flex-grow">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">location_on</span>
                <input className="w-full pl-10 pr-4 py-3 rounded-lg border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface outline-none" placeholder="Enter your zip code" type="text"/>
              </div>
              <button className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">Find produce near you</button>
            </div>
          </div>
          <div className="md:w-1/2 h-[400px] w-full rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(45,106,79,0.08)] relative">
            <img alt="Fresh organic vegetables and fruits arranged beautifully on a rustic wooden table with natural soft lighting" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4lb1_-eGvTHx-XTMk1efxbscLnzKyhDgAzKOiFhGuK65B5rk1JjCaQ3waThhgKQLOWLjEGkJjNExZvdGZXPHgrmPlolAiXXojdRbv-EC-3i6f4HmWEW86MylnguhLX3r3ckX0hp33aBJ-KP-e_uo2Vyf4hsXfayWb-bFEjaeJXZ7GmuvInww50NT0fm5NlrMJ0LnJSkmbcesOAwjryoEjR-5MvRhbnVkScBpp5wTrnGz5Z5jDMxX3pLalwzZwBdFyozi3VRltcVkD"/>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="border-y border-surface-variant bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-margin py-lg grid grid-cols-2 md:grid-cols-4 gap-md">
            <div className="flex flex-col items-center text-center space-y-xs">
              <span className="material-symbols-outlined text-[32px] text-primary" style={{fontVariationSettings: "'FILL' 0"}}>psychology</span>
              <h3 className="font-label-md text-label-md text-on-surface">AI Freshness Score</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-xs">
              <span className="material-symbols-outlined text-[32px] text-primary" style={{fontVariationSettings: "'FILL' 0"}}>inventory_2</span>
              <h3 className="font-label-md text-label-md text-on-surface">Damage-proof Packaging</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-xs">
              <span className="material-symbols-outlined text-[32px] text-primary" style={{fontVariationSettings: "'FILL' 0"}}>local_shipping</span>
              <h3 className="font-label-md text-label-md text-on-surface">Rural Hub Delivery</h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-xs">
              <span className="material-symbols-outlined text-[32px] text-primary" style={{fontVariationSettings: "'FILL' 0"}}>agriculture</span>
              <h3 className="font-label-md text-label-md text-on-surface">Direct from Farmers</h3>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-[1280px] mx-auto px-margin py-xl space-y-lg">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-h2 text-h2 text-primary mb-2">Fresh Arrivals</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Handpicked and ready for delivery</p>
            </div>
            <a className="font-label-md text-label-md text-primary hover:underline" href="#">View all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(45,106,79,0.08)] overflow-hidden flex flex-col group cursor-pointer">
              <div className="h-48 relative overflow-hidden">
                <img alt="Close up of fresh organic heirloom tomatoes with water drops on a wooden cutting board" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpWmnnQFhU-ydD0B4e8dIl93EVTHcWxkTLCe8HsobsypwbxrqYZKZPYTYQRe8tmhVaRCx00gCwoNGwysYUG0y2AmdFAAqEFMbDs2VfUUEoNJSLyvAbOkTL9S3L5hftAO6pcvHAW6KBThqx-IdLPkKeEKGmYnO8H1ppOt3Gn8XA2H62b6fyCgpvseqU6hTzwYRlgM-8Bvv7KDxjQGQ5WEZYvi9BeGp7uSiM4V7-m7iTKy8BNP5cmhtP9ZtT0Yf7EzDetGeXe6LcAF3B"/>
                <div className="absolute top-3 left-3 bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">eco</span>
                  Score 95
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-label-md text-label-md text-on-surface mb-1">Organic Heirloom Tomatoes</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-3">Green Valley Farm</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-label-md text-label-md text-primary">$4.99 / lb</span>
                  <button className="bg-surface-container text-primary p-2 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(45,106,79,0.08)] overflow-hidden flex flex-col group cursor-pointer">
              <div className="h-48 relative overflow-hidden">
                <img alt="Bundle of crisp organic carrots with green tops on a rustic background" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHgvmyz7zifLE-J5bk3nvTzz0jKprN2H8D3simsfo-SBULdCyn6b4SBM8gQgX4eCY9sZ50D38hBg06jDgOvA8u1cfQHSODmTs9PWcht2mbFSbQ2vYGA5X_8Rnehr3fYL5cLN8P0gH8yVrgynigbKb0gJXTgY7041U5CUWKlUUgD8yLfm-vj9NfHD-XsuC6yUYkwaOXLaYPVECknBPIwKyUiYjbLFEZQpZpitquDzV6cKbz_W6bJjvp06ZK2_vuSVaseOc_52DNjh75"/>
                <div className="absolute top-3 left-3 bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">eco</span>
                  Score 88
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-label-md text-label-md text-on-surface mb-1">Rainbow Carrots</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-3">Sunrise Organics</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-label-md text-label-md text-primary">$3.50 / bunch</span>
                  <button className="bg-surface-container text-primary p-2 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(45,106,79,0.08)] overflow-hidden flex flex-col group cursor-pointer">
              <div className="h-48 relative overflow-hidden">
                <img alt="Fresh green spinach leaves in a white bowl" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVVw8p-CkJODXRg0ed4sM091NCK568pc9I7DHJkRx5Zyn-LsZReYsONXwGbLKC3iYFrs-SbfylZAp7pnN6WWbR_OYiB4_BCFxAUyykDEr0FiO0B1FWAIuIz6LmnYulmaf-GrBepFNtTKFMPuZrvTB9oRATkRKLxaz8YZMpSNZFZS4CIha7OKwFi1ZFK2B-mI9WpfIbHu-HRyUwOkty8z2Rzi6fbWrQyKBIJ4ojKI7PJPdUJ36jAn3kfzFztaSod8G8huTk-HdYynY4"/>
                <div className="absolute top-3 left-3 bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">eco</span>
                  Score 92
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-label-md text-label-md text-on-surface mb-1">Baby Spinach</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-3">Oak Creek Farm</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-label-md text-label-md text-primary">$5.00 / bag</span>
                  <button className="bg-surface-container text-primary p-2 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(45,106,79,0.08)] overflow-hidden flex flex-col group cursor-pointer">
              <div className="h-48 relative overflow-hidden">
                <img alt="Fresh artisanal sourdough bread loaf with a crispy crust" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb2qETcqov4s4xPbarV-bq1dETqa9SUSVkBZOdC9sNLEJK_RGyiCyV4f65s4ZnqN3khB7Dk6VKmNzg9A9btbX5dTQHKTIB4ub-uRu8J5Iitn-EfgAXO48yOiqVirZFT1AEgnt2G6CkISJ7Z7lFTX50E03t1D_qrooFOHEH_4Sfq7btXX8OWiIFj8veD1iw8bu7UFZlNxEJW7EdLu0NEeax5uKfV0vz113fnZezIYgCbhSGrrgZbAIvwF260ETNaeqkYviPLwr-Pn_z"/>
                <div className="absolute top-3 left-3 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">bakery_dining</span>
                  Fresh Baked
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-label-md text-label-md text-on-surface mb-1">Country Sourdough</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-3">Hearth Bakery</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-label-md text-label-md text-primary">$8.00 / loaf</span>
                  <button className="bg-surface-container text-primary p-2 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-surface-container-low py-xl">
          <div className="max-w-[1280px] mx-auto px-margin text-center">
            <h2 className="font-h2 text-h2 text-primary mb-lg">From farm to table, simplified</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-lg md:gap-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center flex-1 max-w-[280px] relative z-10">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-[40px]">storefront</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-2">Browse</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Explore seasonal produce from local, vetted farms in your area.</p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block w-24 shrink-0 h-px bg-outline-variant relative">
                <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-outline-variant">chevron_right</span>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center flex-1 max-w-[280px] relative z-10">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-[40px]">shopping_basket</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-2">Order</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Customize your box and check out securely with a few clicks.</p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block w-24 shrink-0 h-px bg-outline-variant relative">
                <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-outline-variant">chevron_right</span>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center flex-1 max-w-[280px] relative z-10">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined text-[40px]">door_front</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-2">Delivered</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Receive your fresh harvest safely packaged at your doorstep.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-50 dark:bg-stone-950 text-emerald-900 dark:text-emerald-500 text-xs uppercase tracking-widest font-[Inter] w-full border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-[1280px] mx-auto py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black text-emerald-800">
            Farmiva
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-stone-500 hover:text-emerald-600 underline-offset-4 hover:underline transition-opacity hover:opacity-80" href="#">Sustainability</a>
            <a className="text-stone-500 hover:text-emerald-600 underline-offset-4 hover:underline transition-opacity hover:opacity-80" href="#">Wholesale</a>
            <a className="text-stone-500 hover:text-emerald-600 underline-offset-4 hover:underline transition-opacity hover:opacity-80" href="#">Privacy Policy</a>
            <a className="text-stone-500 hover:text-emerald-600 underline-offset-4 hover:underline transition-opacity hover:opacity-80" href="#">Terms of Service</a>
            <a className="text-stone-500 hover:text-emerald-600 underline-offset-4 hover:underline transition-opacity hover:opacity-80" href="#">Contact Us</a>
          </div>
          <div className="text-stone-500 text-center md:text-right">
            © 2024 Farmiva Delivery. Freshness guaranteed.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
