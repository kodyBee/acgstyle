"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ColorStyleGuide() {
  const colorPalette = [
    {
      name: "Primary Yellow",
      hex: "#FFD809",
      usage: "Brand color, buttons, highlights, active states",
      variable: "primary-yellow",
      textColor: "black",
    },
    {
      name: "Black",
      hex: "#000000",
      usage: "Header, sidebar, primary text",
      variable: "black",
      textColor: "white",
    },
    {
      name: "White",
      hex: "#FFFFFF",
      usage: "Text on dark backgrounds, card backgrounds",
      variable: "white",
      textColor: "black",
    },
    {
      name: "Gray 100",
      hex: "#F3F4F6",
      usage: "Page background, light backgrounds",
      variable: "gray-100",
      textColor: "black",
    },
    {
      name: "Gray 400",
      hex: "#9CA3AF",
      usage: "Placeholder text, icons, disabled states",
      variable: "gray-400",
      textColor: "white",
    },
    {
      name: "Gray 800",
      hex: "#1F2937",
      usage: "Secondary text, borders",
      variable: "gray-800",
      textColor: "white",
    },
  ];

  const gradients = [
    {
      name: "Hero Overlay",
      gradient: "linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent)",
      usage: "Hero section overlay",
      css: "bg-gradient-to-r from-black/60 to-transparent",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">All Clear Gear Marketplace</h1>
          <h2 className="text-3xl font-bold mb-2">Color Style Guide</h2>
          <p className="text-gray-600 text-lg">
            Brand colors and usage guidelines for developers
          </p>
        </div>

        {/* Primary Brand Colors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Brand Color Palette</CardTitle>
            <CardDescription>
              Core colors used throughout the marketplace application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colorPalette.map((color) => (
                <div key={color.hex} className="space-y-3">
                  {/* Color Swatch */}
                  <div
                    className="h-32 rounded-lg shadow-lg flex items-center justify-center font-mono text-lg font-bold border-2 border-gray-200"
                    style={{
                      backgroundColor: color.hex,
                      color: color.textColor,
                    }}
                  >
                    {color.hex}
                  </div>

                  {/* Color Info */}
                  <div>
                    <h3 className="font-bold text-lg mb-1">{color.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        <span className="font-semibold">Hex:</span>{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded">
                          {color.hex}
                        </code>
                      </p>
                      <p>
                        <span className="font-semibold">Variable:</span>{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded">
                          {color.variable}
                        </code>
                      </p>
                      <p>
                        <span className="font-semibold">Usage:</span>{" "}
                        {color.usage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gradients */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Gradients</CardTitle>
            <CardDescription>
              Gradient overlays and effects used in the design
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {gradients.map((gradient, index) => (
                <div key={index} className="space-y-3">
                  {/* Gradient Swatch */}
                  <div
                    className="h-32 rounded-lg shadow-lg border-2 border-gray-200 relative overflow-hidden"
                    style={{
                      background: gradient.gradient,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                      Gradient Preview
                    </div>
                  </div>

                  {/* Gradient Info */}
                  <div>
                    <h3 className="font-bold text-lg mb-1">{gradient.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        <span className="font-semibold">Tailwind:</span>{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {gradient.css}
                        </code>
                      </p>
                      <p>
                        <span className="font-semibold">Usage:</span>{" "}
                        {gradient.usage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Color Usage Examples</CardTitle>
            <CardDescription>
              Common patterns and component styling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Buttons */}
            <div>
              <h3 className="font-bold text-lg mb-3">Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <button
                  className="px-6 py-3 rounded font-bold text-black hover:opacity-90 transition"
                  style={{ backgroundColor: "#FFD809" }}
                >
                  Primary Button
                </button>
                <button className="px-6 py-3 rounded font-bold bg-black text-white hover:bg-gray-800 transition">
                  Secondary Button
                </button>
                <button className="px-6 py-3 rounded font-bold bg-white text-black border-2 border-black hover:bg-gray-100 transition">
                  Outline Button
                </button>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    bg-[#FFD809] text-black
                  </code>{" "}
                  - Primary actions
                </p>
                <p>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    bg-black text-white
                  </code>{" "}
                  - Secondary actions
                </p>
              </div>
            </div>

            {/* Active States */}
            <div>
              <h3 className="font-bold text-lg mb-3">Active/Selected States</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span style={{ color: "#FFD809" }}>
                    Active/Selected Item (Yellow #FFD809)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-white">Inactive Item (White)</span>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p>
                  Use <code className="bg-gray-100 px-2 py-1 rounded">#FFD809</code> for
                  selected/active checkbox labels on dark backgrounds
                </p>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="font-bold text-lg mb-3">Typography on Dark Backgrounds</h3>
              <div className="bg-black p-6 rounded-lg space-y-2">
                <h2
                  className="text-2xl font-bold"
                  style={{ color: "#FFD809" }}
                >
                  ALL CLEAR GEAR
                </h2>
                <h3 className="text-2xl font-bold text-white">MARKETPLACE</h3>
                <p className="text-gray-400">Secondary text uses gray-400</p>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p>
                  Logo uses{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">#FFD809</code> for
                  "ALL CLEAR GEAR" and white for "MARKETPLACE"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Notes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Developer Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">⚠️ Important Guidelines:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Get as close as you can to amazon.com's layout. The goal is to capture the overall feel and structure of Amazon's marketplace, while using our brand colors and style.
                </li>
                <li>
                  Always use <code className="bg-gray-100 px-1 rounded">#FFD809</code> (not
                  #FFD804) for the primary yellow
                </li>
                <li>
                  Use inline styles for brand colors:{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    style=&#123;&#123; color: "#FFD809" &#125;&#125;
                  </code>
                </li>
                <li>Primary yellow should always have black text for contrast</li>
                <li>
                  Active/selected states on dark backgrounds use yellow (#FFD809)
                </li>
                <li>Use gray-400 for placeholder text and disabled states</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">📦 Tailwind Classes:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Primary button:{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    bg-[#FFD809] hover:bg-[#FFD809]/90 text-black
                  </code>
                </li>
                <li>
                  Dark backgrounds:{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    bg-black text-white
                  </code>
                </li>
                <li>
                  Page background:{" "}
                  <code className="bg-gray-100 px-1 rounded">bg-gray-100</code>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
