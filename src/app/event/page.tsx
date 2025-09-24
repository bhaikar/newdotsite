"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

const EventTimeline = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({});
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());

  const events = useMemo(() => [
    {
      id: 1,
      year: "2K24",
      title: "Hack.MCE 4.0",
      images: [
        "/images/eventimages/HackMce4.0/1.jpg",
        "/images/eventimages/HackMce4.0/2.jpg",
        "/images/eventimages/HackMce4.0/3.jpg",
        "/images/eventimages/HackMce4.0/4.jpg",
        "/images/eventimages/HackMce4.0/5.jpg",
        "/images/eventimages/HackMce4.0/6.jpg"
      ],
      description: `HACK.MCE 4.0

Techno Gaming Fest 2024
Get Ready for the Ultimate Experience!
On Nov 22, Team DevOps hosted a thrilling state-level hackathon at MCE, bringing together brilliant minds to tackle the challenge of designing the MCE Student Hub! Creativity, collaboration, and innovation at their best!
On Nov 23, MCE hosted Cicada, a thrilling puzzle event crafted from scratch by our team! With 400 participants tackling intricate puzzles, it was a battle of wits, curiosity, and innovation. A memorable showcase of intellect and determination!
On Nov 24, MCE hosted an electrifying State-Level Gameathon featuring BGMI & Free Fire! With 200 gamers showcasing strategy, teamwork, and reflexes, it was a thrilling celebration of gaming culture and camaraderie.`
    },
    {
      id: 2,
      year: "2K23",
      title: "Hack.MCE 3.0",
      images: [
        "/images/eventimages/HackMce3.0/1.jpg",
        "/images/eventimages/HackMce3.0/2.jpg",
        "/images/eventimages/HackMce3.0/3.jpg",
        "/images/eventimages/HackMce3.0/4.jpg",
        "/images/eventimages/HackMce3.0/5.jpeg",
        "/images/eventimages/HackMce3.0/6.jpeg",
        "/images/eventimages/HackMce3.0/7.jpeg",
        "/images/eventimages/HackMce3.0/8.jpeg"
      ],
      description: `HACK.MCE 3.0

hosted by the DevOps team, was a grand event that took place on the 16th, 17th, and 22nd of December 2023. The festivities kicked off with the Gameathon, an eagerly anticipated inter-branch e-sports competition that energized the campus, with prelims held a week prior at the bustling college canteen.
The fest was more than just a competition—it was a celebration of creativity, collaboration, and community. It successfully brought together tech enthusiasts and gamers, fostering an environment of learning, networking, and fun. HACK.MCE 3.0 left a lasting impression, setting a high bar for future events and further solidifying its place as a premier tech and gaming fest in the college.`
    },
    {
      id: 3,
      year: "2K22",
      title: "Hack.MCE 2.0",
      images: [
        "/images/eventimages/HackMce2.0/1.jpeg",
        "/images/eventimages/HackMce2.0/2.jpeg",
        "/images/eventimages/HackMce2.0/3.jpeg",
        "/images/eventimages/HackMce2.0/6.jpeg",
        "/images/eventimages/HackMce2.0/7.jpeg"
      ],
      description: `HACK.MCE 2.0

The Techno Gaming Fest took place on the 18th and 19th of June 2022, featuring a dynamic lineup of tech-based events such as Debug, Circuitmania, and Webpage Designing, among many others. This grand fest wasn't just about tech; it also celebrated the spirit of gaming with Gameathon, an inter-branch e-sports event that brought out the competitive spirit among participants. The Gameathon prelims kicked off a week before the main event, creating a buzz in the college canteen as students gathered to showcase their gaming skills. The fest was a huge success, blending technology and gaming into an unforgettable experience for all attendees.`
    },
    {
      id: 4,
      year: "2k18",
      title: "Hack.MCE 1.0",
      images: [
        "/images/eventimages/HackMce1.0/1.jpeg",
        "/images/eventimages/HackMce1.0/2.jpeg",
        "/images/eventimages/HackMce1.0/3.jpeg",
        "/images/eventimages/HackMce1.0/4.jpeg"
      ],
      description: `HACK.MCE 1.0

A national-level Hackathon centered on the theme "Lifestyle" took place on the 28th, 29th, and 30th of October 2018. The event featured an intense 24-hour coding competition, where 80 students from various districts participated, showcasing their technical skills and creativity. In addition to the Hackathon, a workshop on the emerging topic of blockchain was conducted, providing participants with valuable insights into this cutting-edge technology. The event brought together a diverse group of tech enthusiasts, fostering innovation and learning in a collaborative environment.`
    },
    {
      id: 5,
      year: "2018",
      title: "DOT Bytes",
      images: [
        "/images/eventimages/DotBytes/1.png",
        "/images/eventimages/DotBytes/2.png",
        "/images/eventimages/DotBytes/3.png",
        "/images/eventimages/DotBytes/4.png"
      ],
      description: `Dot Bytes

The event .Bytes was successfully organized by the DevOps Team during the odd semester on the 3rd and 4th of November 2017. The event truly embodied the tagline, "Where Technology Meets Fun," as it creatively blended technical challenges with engaging activities, making technology both accessible and enjoyable for all participants
The event offered the team members valuable hands-on experience with software tools essential for application development, greatly enhancing their technical expertise. This not only inspired the students of MCE but also fostered a culture of innovation and creativity on campus.
Two standout events, Thief City and Phat Anthaheli, were major highlights of .Bytes. Thief City challenged participants with puzzles and problem-solving tasks rooted in coding and logic, while Phat Anthaheli brought a playful, competitive edge, pushing participants to think outside the box and apply their technical knowledge in novel ways. The success of .Bytes demonstrated the power of combining learning with fun, leaving a lasting impact on everyone involved and setting a high standard for future events`
    }
  ], []);

  // Initialize image indexes properly
  useEffect(() => {
    const initialIndexes: { [key: string]: number } = {};
    events.forEach((event) => {
      const eventKey = `event-${event.id}`;
      initialIndexes[eventKey] = 0;
    });
    setCurrentImageIndexes(initialIndexes);
  }, [events]);

  // Image slider logic
  useEffect(() => {
    const intervalIds: { [key: string]: NodeJS.Timeout } = {};
    events.forEach((event) => {
      const eventKey = `event-${event.id}`;
      intervalIds[eventKey] = setInterval(() => {
        setCurrentImageIndexes(prev => ({
          ...prev,
          [eventKey]: ((prev[eventKey] || 0) + 1) % event.images.length
        }));
      }, 3000);
    });
    return () => {
      Object.values(intervalIds).forEach(clearInterval);
    };
  }, [events]);

  // Timeline scroll effect - SIMPLIFIED
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !progressRef.current) return;
      
      const timeline = timelineRef.current;
      const timelineItems = timeline.querySelectorAll('.timeline-item');
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const newActiveItems = new Set<number>();
      
      // Get timeline bounds
      const timelineRect = timeline.getBoundingClientRect();
      const timelineTop = timelineRect.top + scrollY;
      const timelineHeight = timeline.offsetHeight;
      
      // Simple progress calculation - start when timeline is in view, end when out of view
      const progressStart = timelineTop - windowHeight * 0.5;
      const progressEnd = timelineTop + timelineHeight - windowHeight * 0.5;
      const currentScroll = scrollY;
      
      let progressRatio = (currentScroll - progressStart) / (progressEnd - progressStart);
      progressRatio = Math.max(0, Math.min(1, progressRatio));
      
      const progressHeight = progressRatio * timelineHeight;
      progressRef.current.style.height = `${progressHeight}px`;

      // Check which timeline items are active
      timelineItems.forEach((item, index) => {
        const point = item.querySelector('.timeline-point') as HTMLElement;
        if (point) {
          const pointRect = point.getBoundingClientRect();
          const pointTop = pointRect.top + scrollY;
          if (pointTop < scrollY + windowHeight * 0.6) {
            newActiveItems.add(index);
          }
        }
      });

      setActiveItems(newActiveItems);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const ImageSlider = ({ images, eventId }: { images: string[]; eventId: number }) => {
    const eventKey = `event-${eventId}`;
    const currentIndex = currentImageIndexes[eventKey] || 0;

    return (
      <div className="w-full h-64 flex justify-center overflow-hidden relative rounded-t-2xl bg-slate-700">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={image}
              alt={`Event ${eventId} - ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
              onError={() => {
                console.error(`Failed to load image: ${image}`);
                // Optional: Set a fallback image
                // e.currentTarget.src = '/images/fallback.jpg';
              }}
            />
          </div>
        ))}
        
        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-900 text-white font-['Inter'] overflow-x-hidden min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="pt-32 pb-16 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Our Journey
        </h1>
        <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
          From passionate beginners to industry leaders, explore the milestones that shaped our DevOps community.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-700 h-full">
              <div 
                ref={progressRef} 
                className="w-full bg-gradient-to-b from-cyan-400 to-blue-500 transition-all duration-300 ease-out" 
                style={{ height: '0%' }} 
              />
            </div>

            <div className="space-y-32">
              {events.map((event, index) => (
                <div key={event.id} className="timeline-item relative flex flex-col md:flex-row min-h-screen">
                  {/* Timeline point */}
                  <div className={`timeline-point absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center text-sm font-bold z-20 transition-all duration-500 ${activeItems.has(index) ? 'bg-gradient-to-r from-cyan-400 to-blue-500 border-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/50' : 'bg-slate-800 border-slate-600 text-slate-300'}`}>
                    {event.year}
                  </div>

                  <div className="w-full flex mt-20 md:mt-0">
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-full md:w-1/2 pr-6 flex justify-end">
                          <div className={`max-w-lg w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] ${activeItems.has(index) ? 'opacity-100 translate-x-0' : '-translate-x-32 opacity-0'}`}>
                            <ImageSlider images={event.images} eventId={event.id} />
                            <div className="p-8">
                              <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                              <p className="text-slate-400 whitespace-pre-line">{event.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="hidden md:block md:w-1/2" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block md:w-1/2" />
                        <div className="w-full md:w-1/2 pl-6 flex justify-start">
                          <div className={`max-w-lg w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] ${activeItems.has(index) ? 'opacity-100 translate-x-0' : 'translate-x-32 opacity-0'}`}>
                            <ImageSlider images={event.images} eventId={event.id} />
                            <div className="p-8">
                              <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                              <p className="text-slate-400 whitespace-pre-line">{event.description}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventTimeline;