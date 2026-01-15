'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Element = {
  id: number
  type: 'text' | 'barcode' | 'image'
  content: string
  x: number
  y: number
}

export default function EditorPage() {
  const [elements, setElements] = useState<Element[]>([])
  const [name, setName] = useState('Shipping Label 4x6')
  const [selected, setSelected] = useState<number | null>(null)

  const addElement = (type: 'text' | 'barcode' | 'image') => {
    const newEl: Element = {
      id: Date.now(),
      type,
      content: type === 'text' ? 'New Text' : type === 'barcode' ? '123456789' : 'image.png',
      x: 50,
      y: 50 + elements.length * 40
    }
    setElements([...elements, newEl])
    setSelected(newEl.id)
  }

  const deleteElement = () => {
    if (selected) {
      setElements(elements.filter(el => el.id !== selected))
      setSelected(null)
    }
  }

  const selectedEl = elements.find(el => el.id === selected)

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar - Tools */}
      <div className="w-64 border-r p-4 overflow-y-auto">
        <h2 className="font-bold mb-4">Elements</h2>
        <div className="space-y-2">
          <Button onClick={() => addElement('text')} className="w-full justify-start" variant="outline">
            📝 Text
          </Button>
          <Button onClick={() => addElement('barcode')} className="w-full justify-start" variant="outline">
            🔲 Barcode
          </Button>
          <Button onClick={() => addElement('image')} className="w-full justify-start" variant="outline">
            🖼️ Image
          </Button>
        </div>

        <h3 className="font-bold mt-6 mb-2">Layers</h3>
        <div className="space-y-1">
          {elements.map(el => (
            <div 
              key={el.id}
              onClick={() => setSelected(el.id)}
              className={`p-2 rounded cursor-pointer ${selected === el.id ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
            >
              {el.type === 'text' ? '📝' : el.type === 'barcode' ? '🔲' : '🖼️'} {el.content}
            </div>
          ))}
        </div>
      </div>

      {/* Center - Canvas */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 flex items-center gap-4">
          <Input 
            value={name} 
            onChange={e => setName(e.target.value)}
            className="max-w-xs"
          />
          <Button>Save Label</Button>
        </div>
        
        <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
          <div className="bg-white w-[400px] h-[600px] relative border-2 shadow-xl">
            {elements.map(el => (
              <div 
                key={el.id}
                onClick={() => setSelected(el.id)}
                style={{
                  position: 'absolute',
                  left: el.x,
                  top: el.y,
                  border: selected === el.id ? '2px solid blue' : '1px solid transparent',
                  padding: '4px',
                  cursor: 'pointer'
                }}
              >
                {el.type === 'barcode' ? (
                  <div className="bg-black text-white px-2 py-1 font-mono text-xs">
                    |||||| {el.content}
                  </div>
                ) : (
                  <span>{el.content}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Properties */}
      <div className="w-64 border-l p-4 overflow-y-auto">
        <h2 className="font-bold mb-4">Properties</h2>
        {selectedEl ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Content</label>
              <Input 
                value={selectedEl.content}
                onChange={e => {
                  setElements(elements.map(el => 
                    el.id === selected ? {...el, content: e.target.value} : el
                  ))
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium">X Position</label>
              <Input 
                type="number"
                value={selectedEl.x}
                onChange={e => {
                  setElements(elements.map(el => 
                    el.id === selected ? {...el, x: parseInt(e.target.value) || 0} : el
                  ))
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Y Position</label>
              <Input 
                type="number"
                value={selectedEl.y}
                onChange={e => {
                  setElements(elements.map(el => 
                    el.id === selected ? {...el, y: parseInt(e.target.value) || 0} : el
                  ))
                }}
              />
            </div>
            <Button onClick={deleteElement} variant="destructive" className="w-full">
              Delete Element
            </Button>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Select an element to edit properties</p>
        )}
      </div>
    </div>
  )
}
