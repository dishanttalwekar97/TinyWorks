"use client"

import React, { useState, useEffect, Component } from "react"
import { Warp } from "@paper-design/shaders-react"

class ShaderErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn("WebGL Shader error, rendering CSS gradient fallback:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const defaultFeatures = [
  {
    title: "Banking & Financial Services",
    description:
      "Secure payment gateways, core banking integrations, fraud detection systems, and automated financial audit ledgers.",
  },
  {
    title: "Insurance",
    description: "Automated claim processing, policy management portals, AI risk assessment, and customer self-service applications.",
  },
  {
    title: "Healthcare",
    description: "HIPAA-compliant telemedicine platforms, EMR/EHR integrations, digital appointment scheduling, and OPD/IPD workflows.",
  },
  {
    title: "Life Sciences",
    description: "Clinical trial management tools, laboratory information management systems (LIMS), and pharmaceutical tracking.",
  },
  {
    title: "Industrial & Robotics",
    description: "IoT telemetry dashboards, predictive machine maintenance, shop floor automation, and inventory control systems.",
  },
  {
    title: "Software & Hi-Tech",
    description: "Cloud-native SaaS engineering, developer API platforms, microservices architecture, and high-performance applications.",
  },
]

function getShaderConfig(index) {
  const configs = [
    {
      proportion: 0.3,
      softness: 0.8,
      distortion: 0.15,
      swirl: 0.6,
      swirlIterations: 8,
      shape: "checks",
      shapeScale: 0.08,
      colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
      gradientFallback: "from-purple-900/50 via-pink-900/40 to-slate-900",
    },
    {
      proportion: 0.4,
      softness: 1.2,
      distortion: 0.2,
      swirl: 0.9,
      swirlIterations: 12,
      shape: "dots",
      shapeScale: 0.12,
      colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
      gradientFallback: "from-cyan-900/50 via-teal-900/40 to-slate-900",
    },
    {
      proportion: 0.35,
      softness: 0.9,
      distortion: 0.18,
      swirl: 0.7,
      swirlIterations: 10,
      shape: "checks",
      shapeScale: 0.1,
      colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"],
      gradientFallback: "from-emerald-900/50 via-green-900/40 to-slate-900",
    },
    {
      proportion: 0.45,
      softness: 1.1,
      distortion: 0.22,
      swirl: 0.8,
      swirlIterations: 15,
      shape: "dots",
      shapeScale: 0.09,
      colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
      gradientFallback: "from-amber-900/50 via-orange-900/40 to-slate-900",
    },
    {
      proportion: 0.38,
      softness: 0.95,
      distortion: 0.16,
      swirl: 0.85,
      swirlIterations: 11,
      shape: "checks",
      shapeScale: 0.11,
      colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
      gradientFallback: "from-indigo-900/50 via-purple-900/40 to-slate-900",
    },
    {
      proportion: 0.42,
      softness: 1.0,
      distortion: 0.19,
      swirl: 0.75,
      swirlIterations: 9,
      shape: "dots",
      shapeScale: 0.13,
      colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
      gradientFallback: "from-rose-900/50 via-pink-900/40 to-slate-900",
    },
  ]
  return configs[index % configs.length]
}

export default function FeaturesCards({ items = defaultFeatures, onItemClick }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((feature, index) => {
        const shaderConfig = getShaderConfig(index)
        const IconComponent = feature.icon

        const fallbackBackground = (
          <div className={`absolute inset-0 bg-gradient-to-br ${shaderConfig.gradientFallback} rounded-[28px] sm:rounded-[32px]`} />
        );

        return (
          <div 
            key={index} 
            onClick={() => onItemClick && onItemClick(feature)}
            className="relative h-80 group cursor-pointer overflow-hidden rounded-[28px] sm:rounded-[32px] shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
          >
            {/* Background Shader with Error Boundary & Deferral */}
            <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] overflow-hidden">
              {fallbackBackground}
              
              {mounted && (
                <ShaderErrorBoundary fallback={null}>
                  <Warp
                    style={{ height: "100%", width: "100%", position: "absolute", inset: 0 }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={shaderConfig.colors}
                  />
                </ShaderErrorBoundary>
              )}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] h-full flex flex-col justify-between bg-black/75 backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 group-hover:bg-black/60 group-hover:border-cyan-400/50">
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                  {typeof IconComponent === 'function' ? (
                    <IconComponent className="w-6 h-6 text-white" />
                  ) : typeof IconComponent === 'object' && React.isValidElement(IconComponent) ? (
                    IconComponent
                  ) : (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white font-heading leading-tight">{feature.title}</h3>
                <p className="leading-relaxed text-slate-200 text-xs sm:text-sm font-medium line-clamp-3">{feature.desc || feature.description}</p>

                <div className="mt-4 flex items-center text-xs font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                  <span className="mr-2">Explore Industry Solutions</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}
