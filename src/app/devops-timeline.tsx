// 'use client';
// import React, { useState, useRef, useMemo, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const DevOpsTimeline = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
//   const [lineProgress, setLineProgress] = useState(0);
//   const timelineRef = useRef<HTMLDivElement>(null);

//   // Image slider state for each timeline item
//   const [currentImageIndexes, setCurrentImageIndexes] = useState<Record<number, number>>({});

//   const events = useMemo(() => [
//     {
//       year: '2K24',
//       title: 'Hack.MCE 4.0',
//       images: [
//         'images/eventimages/HackMce4.0/1.jpg',
//         'images/eventimages/HackMce4.0/2.jpg',
//         'images/eventimages/HackMce4.0/3.jpg',
//         'images/eventimages/HackMce4.0/4.jpg',
//         'images/eventimages/HackMce4.0/5.jpg',
//         'images/eventimages/HackMce4.0/6.jpg'
//       ],
//       description: `HACK.MCE 4.0
        
// Techno Gaming Fest 2024
// Get Ready for the Ultimate Experience!
// On Nov 22, Team DevOps hosted a thrilling state-level hackathon at MCE, bringing together brilliant minds to tackle the challenge of designing the MCE Student Hub! Creativity, collaboration, and innovation at their best!
// On Nov 23, MCE hosted Cicada, a thrilling puzzle event crafted from scratch by our team! With 400 participants tackling intricate puzzles, it was a battle of wits, curiosity, and innovation. A memorable showcase of intellect and determination!
// On Nov 24, MCE hosted an electrifying State-Level Gameathon featuring BGMI & Free Fire! With 200 gamers showcasing strategy, teamwork, and reflexes, it was a thrilling celebration of gaming culture and camaraderie.`
//     },
//     {
//       year: '2K23',
//       title: 'Hack.MCE 3.0',
//       images: [
//         'images/eventimages/HackMce3.0/1.jpg',
//         'images/eventimages/HackMce3.0/2.jpg',
//         'images/eventimages/HackMce3.0/3.jpg',
//         'images/eventimages/HackMce3.0/4.jpg',
//         'images/eventimages/HackMce3.0/5.jpeg',
//         'images/eventimages/HackMce3.0/6.jpeg',
//         'images/eventimages/HackMce3.0/7.jpeg',
//         'images/eventimages/HackMce3.0/8.jpeg'
//       ],
//       description: `HACK.MCE 3.0

// hosted by the DevOps team, was a grand event that took place on the 16th, 17th, and 22nd of December 2023. The festivities kicked off with the Gameathon, an eagerly anticipated inter-branch e-sports competition that energized the campus, with prelims held a week prior at the bustling college canteen.
// The fest was more than just a competition—it was a celebration of creativity, collaboration, and community. It successfully brought together tech enthusiasts and gamers, fostering an environment of learning, networking, and fun. HACK.MCE 3.0 left a lasting impression, setting a high bar for future events and further solidifying its place as a premier tech and gaming fest in the college.`
//     },
//     {
//       year: '2K22',
//       title: 'Hack.MCE 2.0',
//       images: [
//         'images/eventimages/HackMce2.0/1.jpeg',
//         'images/eventimages/HackMce2.0/2.jpeg',
//         'images/eventimages/HackMce2.0/3.jpeg',
//         'images/eventimages/HackMce2.0/6.jpeg',
//         'images/eventimages/HackMce2.0/7.jpeg'
//       ],
//       description: `HACK.MCE 2.0

// The Techno Gaming Fest took place on the 18th and 19th of June 2022, featuring a dynamic lineup of tech-based events such as Debug, Circuitmania, and Webpage Designing, among many others. This grand fest wasn't just about tech; it also celebrated the spirit of gaming with Gameathon, an inter-branch e-sports event that brought out the competitive spirit among participants. The Gameathon prelims kicked off a week before the main event, creating a buzz in the college canteen as students gathered to showcase their gaming skills. The fest was a huge success, blending technology and gaming into an unforgettable experience for all attendees.`
//     },
//     {
//       year: '2k18',
//       title: 'Hack.MCE 1.0',
//       images: [
//         'images/eventimages/HackMce1.0/1.jpeg',
//         'images/eventimages/HackMce1.0/2.jpeg',
//         'images/eventimages/HackMce1.0/3.jpeg',
//         'images/eventimages/HackMce1.0/4.jpeg'
//       ],
//       description: `HACK.MCE 1.0

// A national-level Hackathon centered on the theme "Lifestyle" took place on the 28th, 29th, and 30th of October 2018. The event featured an intense 24-hour coding competition, where 80 students from various districts participated, showcasing their technical skills and creativity. In addition to the Hackathon, a workshop on the emerging topic of blockchain was conducted, providing participants with valuable insights into this cutting-edge technology. The event brought together a diverse group of tech enthusiasts, fostering innovation and learning in a collaborative environment.`
//     },
//     {
//       year: '2018',
//       title: 'DOT Bytes',
//       images: [
//         'images/eventimages/DotBytes/1.png',
//         'images/eventimages/DotBytes/2.png',
//         'images/eventimages/DotBytes/3.png',
//         'images/eventimages/DotBytes/4.png'
//       ],
//       description: `Dot Bytes

// The event .Bytes was successfully organized by the DevOps Team during the odd semester on the 3rd and 4th of November 2017. The event truly embodied the tagline, "Where Technology Meets Fun," as it creatively blended technical challenges with engaging activities, making technology both accessible and enjoyable for all participants
// The event offered the team members valuable hands-on experience with software tools essential for application development, greatly enhancing their technical expertise. This not only inspired the students of MCE but also fostered a culture of innovation and creativity on campus.
// Two standout events, Thief City and Phat Anthaheli, were major highlights of .Bytes. Thief City challenged participants with puzzles and problem-solving tasks rooted in coding and logic, while Phat Anthaheli brought a playful, competitive edge, pushing participants to think outside the box and apply their technical knowledge in novel ways. The success of .Bytes demonstrated the power of combining learning with fun, leaving a lasting impact on everyone involved and setting a high standard for future events`
//     },
//   ], []);

//   // Auto-sliding image functionality
//   useEffect(() => {
//     const intervals: number[] = [];

//     events.forEach((event, eventIndex) => {
//       const interval = window.setInterval(() => {
//         setCurrentImageIndexes(prev => ({
//           ...prev,
//           [eventIndex]: ((prev[eventIndex] || 0) + 1) % event.images.length
//         }));
//       }, 3000);
//       intervals.push(interval);
//     });

//     return () => {
//       intervals.forEach(clearInterval);
//     };
//   }, [events]);

//   // Scroll animation effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;
//       const windowHeight = window.innerHeight;

//       // Update line progress
//       const timeline = timelineRef.current;
//       if (timeline) {
//         const timelineTop = (timeline as HTMLDivElement).offsetTop;
//         const timelineHeight = (timeline as HTMLDivElement).offsetHeight;
//         const progress = Math.max(0, Math.min(100, ((scrollTop - timelineTop + windowHeight / 2) / timelineHeight) * 100));
//         setLineProgress(progress);
//       }

//       // Update active items
//       const timelineItems = document.querySelectorAll('.timeline-item');
//       const newActiveItems = new Set<number>();

//       timelineItems.forEach((item, index) => {
//         const itemTop = (item as HTMLElement).offsetTop;
//         if (itemTop < scrollTop + windowHeight * 0.6) {
//           newActiveItems.add(index);
//         }
//       });

//       setActiveItems(newActiveItems);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial call

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full backdrop-blur-lg bg-blue-950/30 border-b border-blue-400/20 z-50 shadow-lg shadow-blue-500/10">
//         <div className="flex justify-between items-center px-6 py-4">
//           <Link href="/" className="flex-shrink-0">
//             <Image
//               src="images/dotlogo.png"
//               alt="Club Logo"
//               className="h-12 w-auto hover:scale-110 transition-transform duration-300"
//               width={48}
//               height={48}
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex space-x-8">
//             {['Home', 'Event', 'Our Work', 'Our Team', 'Contact Us', 'About Us'].map((item) => (
//               <li key={item} className="relative group">
//                 <Link
//                   href="#"
//                   className="text-blue-100 hover:text-blue-300 text-lg font-semibold transition-all duration-300 hover:scale-110"
//                 >
//                   {item}
//                 </Link>
//                 {(item === 'Our Work' || item === 'Our Team') && (
//                   <ul className="absolute top-full left-0 mt-2 w-48 bg-blue-950/90 backdrop-blur-lg rounded-lg shadow-lg shadow-blue-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                     {item === 'Our Work' ? (
//                       <>
//                         <li><Link href="#" className="block px-4 py-3 text-blue-100 hover:bg-blue-800/50 hover:text-blue-300 transition-colors rounded-t-lg">Workshops</Link></li>
//                         <li><Link href="#" className="block px-4 py-3 text-blue-100 hover:bg-blue-800/50 hover:text-blue-300 transition-colors rounded-b-lg">Projects</Link></li>
//                       </>
//                     ) : (
//                       <>
//                         <li><Link href="#" className="block px-4 py-3 text-blue-100 hover:bg-blue-800/50 hover:text-blue-300 transition-colors rounded-t-lg">Team</Link></li>
//                         <li><Link href="#" className="block px-4 py-3 text-blue-100 hover:bg-blue-800/50 hover:text-blue-300 transition-colors rounded-b-lg">Login</Link></li>
//                       </>
//                     )}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
//           >
//             <span className={`block w-6 h-0.5 bg-blue-100 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//             <span className={`block w-6 h-0.5 bg-blue-100 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
//             <span className={`block w-6 h-0.5 bg-blue-100 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//           </button>
//         </div>

//         {/* Mobile Navigation Menu */}
//         <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
//           <div className="bg-blue-950/95 backdrop-blur-lg border-t border-blue-400/20">
//             {['Home', 'Event', 'Our Work', 'Our Team', 'Contact Us', 'About Us'].map((item) => (
//               <Link
//                 key={item}
//                 href="#"
//                 className="block px-6 py-4 text-blue-100 hover:bg-blue-800/30 hover:text-blue-300 transition-colors border-b border-blue-400/10 last:border-b-0"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Title Section */}
//       <div className="pt-32 pb-16 text-center">
//         <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-pulse">
//           DEVOPS JOURNEY SO FAR
//         </h1>
//       </div>

//       {/* Timeline Section */}
//       <div className="max-w-6xl mx-auto px-4 pb-20" ref={timelineRef}>
//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-600">
//             <div
//               className="w-full bg-gradient-to-b from-blue-400 to-cyan-400 transition-all duration-300 ease-out shadow-lg shadow-blue-400/50"
//               style={{ height: `${lineProgress}%` }}
//             ></div>
//           </div>

//           {/* Timeline Items */}
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className={`timeline-item relative mb-16 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
//             >
//               {/* Point and Meta */}
//               <div className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start pl-1/2' : 'justify-end pr-1/2'}`}>
//                 <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
//                   {/* Point */}
//                   <div className={`relative z-10 w-12 h-12 rounded-full border-3 border-blue-400 bg-slate-800 flex items-center justify-center text-blue-100 font-bold text-sm mx-4 ${activeItems.has(index) ? 'bg-blue-400 text-slate-900 shadow-lg shadow-blue-400/50 scale-110' : ''} transition-all duration-500`}>
//                     {event.year}
//                   </div>

//                   {/* Meta */}
//                   <div className={`hidden md:block text-2xl font-bold text-blue-300 ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
//                     {event.title}
//                   </div>
//                 </div>
//               </div>

//               {/* Content Card */}
//               <div className={`${index % 2 === 0 ? 'ml-auto pr-8' : 'mr-auto pl-8'} w-full md:w-5/12 ${activeItems.has(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'} transition-all duration-700 ease-out`}>
//                 <div className="backdrop-blur-lg bg-blue-900/20 border border-blue-400/30 rounded-xl shadow-xl shadow-blue-500/10 overflow-hidden hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 hover:scale-105">

//                   {/* Image Carousel */}
//                   <div className="relative h-64 overflow-hidden">
//                     {event.images.map((image, imgIndex) => (
//                       <Image
//                         key={imgIndex}
//                         src={image}
//                         alt={`${event.title} ${imgIndex + 1}`}
//                         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//                           imgIndex === (currentImageIndexes[index] || 0) ? 'opacity-100' : 'opacity-0'
//                         }`}
//                         width={600}
//                         height={400}
//                       />
//                     ))}
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <h3 className="md:hidden text-2xl font-bold text-blue-300 mb-4">{event.title}</h3>
//                     <div className="text-blue-100 leading-relaxed whitespace-pre-line">
//                       {event.description}
//                     </div>
//                   </div>

//                   {/* Arrow */}
//                   <div className={`absolute top-8 w-4 h-4 bg-blue-900/20 border-l border-t border-blue-400/30 rotate-45 ${index % 2 === 0 ? '-left-2' : '-right-2'}`}></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="backdrop-blur-lg bg-blue-950/30 border-t border-blue-400/20 py-8">
//         <div className="flex justify-center space-x-8">
//           {[
//             { href: 'https://www.instagram.com/devops_malnad/', src: 'images/instalogo.png', alt: 'Instagram' },
//             { href: 'https://www.linkedin.com/company/devops-team-mce/posts/?feedView=all', src: 'images/linkedinlogo.png', alt: 'LinkedIn' },
//             { href: 'mailto:devopsteammalnad@gmail.com', src: 'images/maillogo.png', alt: 'Gmail' },
//             { href: 'https://github.com/Devops-Malnad', src: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg', alt: 'GitHub' }
//           ].map((social, index) => (
//             <a
//               key={index}
//               href={social.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 hover:scale-125 transition-transform duration-300"
//             >
//               <Image src={social.src} alt={social.alt} className="w-full h-full object-contain filter brightness-90 hover:brightness-110" width={40} height={40} />
//             </a>
//           ))}
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default DevOpsTimeline;