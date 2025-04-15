import React, { useState, useEffect, useRef } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import NavBar from './components/NavBar';
import { useReactToPrint } from 'react-to-print';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [memories, setMemories] = useState([]);
  const [dedication, setDedication] = useState('');
  const [adminMode, setAdminMode] = useState(false);

  useEffect(() => {
    const storedMemories = localStorage.getItem('memories');
    const storedDedication = localStorage.getItem('dedication');
    if (storedMemories) {
      setMemories(JSON.parse(storedMemories));
    }
    if (storedDedication) {
      setDedication(storedDedication);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('memories', JSON.stringify(memories));
  }, [memories]);

  useEffect(() => {
    localStorage.setItem('dedication', dedication);
  }, [dedication]);

  const addMemory = (memory) => {
    setMemories([...memories, memory]);
  };

  const updateMemory = (index, updatedMemory) => {
    const newMemories = [...memories];
    newMemories[index] = updatedMemory;
    setMemories(newMemories);
  };

  const deleteMemory = (index) => {
    const newMemories = [...memories];
    newMemories.splice(index, 1);
    setMemories(newMemories);
  };
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setMemories((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  const updateDedication = (newDedication) => {
    setDedication(newDedication);
  };
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Memory Book',
    onAfterPrint: () => console.log('Printed successfully')
  });

  return (
    <div>
        <NavBar />
        <AppRoutes
          memories={memories}
          addMemory={addMemory}
          updateMemory={updateMemory}
          deleteMemory={deleteMemory}
          handleDragEnd={handleDragEnd}
          dedication={dedication}
          updateDedication={updateDedication}
          adminMode={adminMode}
        />
    </div>
  );
}

export default App;