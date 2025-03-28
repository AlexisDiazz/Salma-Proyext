"use client";

import { useState, useEffect } from "react";
import { Heart, Sparkles, Calendar, MapPin, Clock, Phone, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [phone, setPhone] = useState("");
  const [response, setResponse] = useState<"yes" | "no" | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCalendar = () => {
    const event = {
      title: "Día Especial en el Club de Golf",
      location: "Club de Golf",
      startDate: "2024-02-24T10:00:00",
      endDate: "2024-02-24T18:00:00",
      description: "Día especial con masajes, spa, gym y más sorpresas románticas",
    };

    const formatDate = (date: string) => date.replace(/-|:|\.\d+/g, "");
    const calendarUrl = `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${formatDate(event.startDate)}
DTEND:${formatDate(event.endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    window.open(encodeURI(calendarUrl));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center p-4 overflow-hidden">
      <div className={`relative max-w-2xl w-full transition-all duration-1000 ${isOpen ? "animate-fade-scale" : "opacity-0 scale-95"}`}>
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="relative animate-float">
            <Heart
              className="w-24 h-24 text-pink-500 animate-heartbeat"
              fill="#ec4899"
              strokeWidth={1.5}
              style={{ filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl rounded-full" />
          </div>
        </div>

        <div className="glass-card rounded-3xl shadow-2xl p-8 text-center overflow-hidden mt-8">
          <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-3 tracking-wider text-shadow">
              Mi Amor <Sparkles className="inline-block w-8 h-8 text-yellow-400 ml-2" />
            </h1>
            <p className="text-gray-300 italic text-xl">Te invito a un día especial...</p>
          </div>

          {!showDetails ? (
            <div className="mb-8 space-y-8">
              <div className="relative w-96 h-96 mx-auto rounded-2xl overflow-hidden gradient-border animate-float">
                <Image
                  src="https://i.pinimg.com/736x/2a/72/e4/2a72e4445fc61c76fecf6a6bdcda6768.jpg"
                  alt="Imagen romántica principal"
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
              <button
                onClick={() => setShowDetails(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-5 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 animate-glow shadow-xl"
              >
                Descubre tu sorpresa
              </button>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-scale">
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-64 rounded-xl overflow-hidden gradient-border transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://i.pinimg.com/736x/ec/d5/53/ecd5534b5065206652cbe74a972c070e.jpg"
                    alt="Detalle romántico 1"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden gradient-border transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://i.pinimg.com/736x/d6/6e/2e/d66e2ee4e4cc32304ed5f90dc8bd3af2.jpg"
                    alt="Detalle romántico 2"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 text-white">
                <div className="glass-card rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <Calendar className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <span className="text-lg font-medium">Este Sábado</span>
                </div>
                <div className="glass-card rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <Clock className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <span className="text-lg font-medium">10:00 AM</span>
                </div>
                <div className="glass-card rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <span className="text-lg font-medium">Club de Golf</span>
                </div>
              </div>

              <div className="glass-card rounded-xl p-8 text-white">
                <p className="font-medium text-xl mb-6">Te invito a disfrutar de:</p>
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    "🌺 Masajes relajantes",
                    "✨ Tratamientos faciales",
                    "🧖🏻‍♀️ Sauna",
                    "🍷 Almuerzo romántico",
                    "🏋 Día de gym",
                    "➕ Y más..."
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="glass-card p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 text-lg"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <p className="text-white text-lg mb-4">¿Me acompañas?</p>
                <div className="flex justify-center space-x-8">
                  <Button
                    onClick={() => setResponse("yes")}
                    className={`${
                      response === "yes"
                        ? "bg-gradient-to-r from-green-400 to-green-600"
                        : "glass-card hover:bg-white/10"
                    } rounded-full p-6 transition-all duration-300 hover:scale-110`}
                  >
                    <Check className="w-8 h-8" />
                  </Button>
                  <Button
                    onClick={() => setResponse("no")}
                    className={`${
                      response === "no"
                        ? "bg-gradient-to-r from-red-400 to-red-600"
                        : "glass-card hover:bg-white/10"
                    } rounded-full p-6 transition-all duration-300 hover:scale-110`}
                  >
                    <X className="w-8 h-8" />
                  </Button>
                </div>

                {response === "yes" && (
                  <div className="space-y-4 animate-fade-scale">
                    <div className="flex items-center space-x-2 glass-card rounded-full p-3">
                      <Phone className="w-6 h-6 text-pink-400 ml-3" />
                      <Input
                        type="tel"
                        placeholder="Tu número de teléfono"
                        value={phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                        className="bg-transparent border-none text-white placeholder-gray-400 focus:ring-0 text-lg"
                      />
                    </div>
                    <Button
                      onClick={handleAddToCalendar}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full py-5 text-lg hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
                    >
                      Agregar a Calendario
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
