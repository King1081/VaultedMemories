import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from '../components/SortableItem';

function CustomizePage({ memories, handleDragEnd, dedication, updateDedication }) {
  const [currentMemories, setCurrentMemories] = useState([]);

  useEffect(() => {
  }, [memories]);

  const handleDragEndInternal = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = currentMemories.findIndex((item) => item.id === active.id);
      const newIndex = currentMemories.findIndex((item) => item.id === over.id);
      const newMemories = arrayMove(currentMemories, oldIndex, newIndex);
      setCurrentMemories(newMemories);
      handleDragEnd(event);
      console.log("memories", memories);
    }
  };

  const handleDedicationChange = (event) => {
    updateDedication(event.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Customize Your Memory Book</h2>

      {/* Dedication Page */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Dedication</h3>
        <textarea
          className="w-full p-2 border border-gray-300 rounded handwriting-font paper-background"
          value={dedication}
          onChange={handleDedicationChange}
          placeholder="Write a personal message or dedication here..."
          rows={5}
        />
      </div>

      {/* Drag and Drop */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEndInternal}>
        <SortableContext items={currentMemories} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {memories.map((memory, index) => (
              <div key={memory.id || index}>
              {memory.previewUrl && <img src={memory.previewUrl} alt={memory.caption} className="w-full h-48 object-cover rounded-lg mb-2" />}
              <p>{memory.caption}</p>
              </div>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default CustomizePage;