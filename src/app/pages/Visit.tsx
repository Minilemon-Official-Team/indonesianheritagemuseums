import { MapPin, Clock, Ticket, Phone, Mail, DollarSign, Users, Calendar } from 'lucide-react';

export default function Visit() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Plan Your Visit
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Everything you need to know before visiting the Indonesian Heritage Museum
          </p>
        </div>

        {/* Opening Hours & Admission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Opening Hours */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E7DED0] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">Opening Hours</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-[#C8B9A6]">
                <span className="text-[#2B2B2B]">Tuesday - Friday</span>
                <span className="text-[#8C6B3E] font-medium">09:00 - 17:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#C8B9A6]">
                <span className="text-[#2B2B2B]">Saturday - Sunday</span>
                <span className="text-[#8C6B3E] font-medium">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-[#2B2B2B]">Monday</span>
                <span className="text-[#d4183d] font-medium">Closed</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#E7DED0] rounded">
              <p className="text-sm text-[#5A5A5A]">
                <strong className="text-[#2B2B2B]">Note:</strong> Last admission is 30 minutes before closing time. 
                The museum may close on national holidays.
              </p>
            </div>
          </div>

          {/* Admission Prices */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E7DED0] flex items-center justify-center">
                <Ticket className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">Admission</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-[#C8B9A6]">
                <div>
                  <div className="text-[#2B2B2B]">Adults</div>
                  <div className="text-sm text-[#5A5A5A]">General admission</div>
                </div>
                <span className="text-[#8C6B3E] font-medium text-xl">IDR 50,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#C8B9A6]">
                <div>
                  <div className="text-[#2B2B2B]">Students & Seniors</div>
                  <div className="text-sm text-[#5A5A5A]">With valid ID</div>
                </div>
                <span className="text-[#8C6B3E] font-medium text-xl">IDR 25,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#C8B9A6]">
                <div>
                  <div className="text-[#2B2B2B]">Children</div>
                  <div className="text-sm text-[#5A5A5A]">Under 12 years</div>
                </div>
                <span className="text-[#8C6B3E] font-medium text-xl">Free</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <div className="text-[#2B2B2B]">Family Pass</div>
                  <div className="text-sm text-[#5A5A5A]">2 adults + 2 children</div>
                </div>
                <span className="text-[#8C6B3E] font-medium text-xl">IDR 120,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E7DED0] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">Location</h2>
            </div>
            <div className="space-y-4">
              <p className="text-[#2B2B2B] leading-relaxed">
                Jl. Kajoetangan No. 22<br />
                Kelurahan Kauman, Kecamatan Klojen<br />
                Malang, East Java 65119<br />
                Indonesia
              </p>
              <div className="border-t border-[#C8B9A6] pt-4">
                <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-3">How to Get Here</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• 15 minutes from Malang Train Station</li>
                  <li>• 30 minutes from Abdul Rachman Saleh Airport</li>
                  <li>• Parking available on-site</li>
                  <li>• Accessible via public transportation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E7DED0] flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">Contact Us</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#8C6B3E] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-[#2B2B2B] font-medium">Phone</div>
                  <div className="text-[#5A5A5A]">+62 341 362 943</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#8C6B3E] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-[#2B2B2B] font-medium">Email</div>
                  <div className="text-[#5A5A5A]">info@indonesianheritagemuseum.com</div>
                </div>
              </div>
              <div className="border-t border-[#C8B9A6] pt-4">
                <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-3">Customer Service</h3>
                <p className="text-[#5A5A5A]">
                  Our staff is available during opening hours to assist with inquiries, 
                  bookings, and general information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-6 text-center">Find Us</h2>
          <div className="aspect-video bg-[#E7DED0] rounded flex items-center justify-center">
            <div className="text-center text-[#5A5A5A]">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-[#8C6B3E]" />
              <p className="text-lg">Interactive Map</p>
              <p className="text-sm">Jl. Kajoetangan No. 22, Malang, East Java</p>
            </div>
          </div>
        </div>

        {/* Group Visits & Special Services */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Group Visits */}
          <div className="bg-[#E7DED0] rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Users className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">Group Visits</h2>
            </div>
            <p className="text-[#2B2B2B] mb-4 leading-relaxed">
              Special rates and services available for groups of 10 or more visitors, 
              including schools, universities, and tour groups.
            </p>
            <ul className="space-y-2 text-[#5A5A5A] mb-6">
              <li>• Discounted group rates</li>
              <li>• Guided tours in multiple languages</li>
              <li>• Educational materials available</li>
              <li>• Advance booking required</li>
            </ul>
            <button className="px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-colors">
              Book Group Visit
            </button>
          </div>

          {/* Special Events */}
          <div className="bg-[#E7DED0] rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">Special Events</h2>
            </div>
            <p className="text-[#2B2B2B] mb-4 leading-relaxed">
              The museum is available for special events, including corporate functions, 
              educational programs, and cultural celebrations.
            </p>
            <ul className="space-y-2 text-[#5A5A5A] mb-6">
              <li>• Private venue rental</li>
              <li>• Corporate event hosting</li>
              <li>• Educational workshops</li>
              <li>• Cultural performances</li>
            </ul>
            <button className="px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-colors">
              Inquire About Events
            </button>
          </div>
        </div>

        {/* Visitor Guidelines */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-6 text-center">Visitor Guidelines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-3">Photography</h3>
              <p className="text-[#5A5A5A] text-sm">
                Personal photography is permitted. Flash photography and tripods are not allowed.
              </p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-3">Accessibility</h3>
              <p className="text-[#5A5A5A] text-sm">
                The museum is wheelchair accessible. Wheelchairs available at the entrance.
              </p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-3">Facilities</h3>
              <p className="text-[#5A5A5A] text-sm">
                Free Wi-Fi, restrooms, prayer room, and coat check available.
              </p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-3">Dress Code</h3>
              <p className="text-[#5A5A5A] text-sm">
                Respectful attire requested. Comfortable walking shoes recommended.
              </p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-3">Food & Drink</h3>
              <p className="text-[#5A5A5A] text-sm">
                Not permitted in galleries. Café available in the museum lobby.
              </p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-3">Bag Storage</h3>
              <p className="text-[#5A5A5A] text-sm">
                Large bags must be checked. Free lockers available at the entrance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
