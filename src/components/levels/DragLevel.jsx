import React, { useState, useRef } from 'react';

function DragLevel({ level, onAnswer, isCorrect }) {
  const [dragging, setDragging] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [itemPositions, setItemPositions] = useState({});
  const [shrunk, setShrunk] = useState(false);
  const containerRef = useRef(null);

  const handleDragStart = (e, item) => {
    if (isCorrect || !item.draggable) return;
    
    const touch = e.touches ? e.touches[0] : e;
    const rect = e.target.getBoundingClientRect();
    
    setDragging(item.id);
    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
  };

  const handleDragMove = (e) => {
    if (!dragging) return;
    
    const touch = e.touches ? e.touches[0] : e;
    const container = containerRef.current;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    
    setItemPositions(prev => ({
      ...prev,
      [dragging]: {
        x: touch.clientX - containerRect.left - dragOffset.x,
        y: touch.clientY - containerRect.top - dragOffset.y
      }
    }));
  };

  const handleDragEnd = () => {
    if (!dragging) return;
    
    // Check if dropped on target
    const draggedPos = itemPositions[dragging];
    const target = level.items.find(i => i.isTarget);
    
    if (draggedPos && target) {
      // Simple collision detection (you can improve this)
      const container = containerRef.current;
      const targetEl = container?.querySelector(`[data-target="true"]`);
      
      if (targetEl) {
        const targetRect = targetEl.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const targetPos = {
          x: targetRect.left - containerRect.left,
          y: targetRect.top - containerRect.top,
          width: targetRect.width,
          height: targetRect.height
        };
        
        // Check collision
        const isOverTarget = 
          draggedPos.x > targetPos.x - 50 &&
          draggedPos.x < targetPos.x + targetPos.width + 50 &&
          draggedPos.y > targetPos.y - 50 &&
          draggedPos.y < targetPos.y + targetPos.height + 50;
        
        if (isOverTarget) {
          // For special shrink action
          if (level.specialAction === 'shrinkText' && shrunk) {
            onAnswer(true);
          } else if (!level.specialAction) {
            onAnswer(true);
          }
        }
      }
    }
    
    setDragging(null);
  };

  const handleShrink = () => {
    if (!shrunk) {
      setShrunk(true);
    }
  };

  const getDraggableItem = () => {
    return level.items.find(i => i.draggable);
  };

  const getTargetItem = () => {
    return level.items.find(i => i.isTarget);
  };

  const draggableItem = getDraggableItem();
  const targetItem = getTargetItem();

  return (
    <div 
      ref={containerRef}
      className="relative h-64"
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <p className="text-center text-white/60 mb-4">{level.instruction}</p>
      
      {/* Hint for shrink action */}
      {level.specialAction === 'shrinkText' && !shrunk && (
        <p className="text-center text-amber-400 text-sm mb-4">
          💡 Tip: Coba tap gajah dua kali untuk mengecilkannya!
        </p>
      )}

      <div className="flex justify-around items-center h-full">
        {/* Draggable Item */}
        {draggableItem && (
          <div
            className={`
              text-6xl cursor-grab active:cursor-grabbing select-none
              transition-transform duration-200
              ${shrunk ? 'text-2xl' : ''}
              ${dragging === draggableItem.id ? 'scale-110' : ''}
            `}
            style={itemPositions[draggableItem.id] ? {
              position: 'absolute',
              left: itemPositions[draggableItem.id].x,
              top: itemPositions[draggableItem.id].y,
            } : {}}
            onMouseDown={(e) => handleDragStart(e, draggableItem)}
            onTouchStart={(e) => handleDragStart(e, draggableItem)}
            onDoubleClick={handleShrink}
          >
            {draggableItem.emoji}
            <p className="text-sm text-center text-white/70 mt-2">{draggableItem.label}</p>
          </div>
        )}

        {/* Target Item */}
        {targetItem && (
          <div
            data-target="true"
            className="text-6xl p-4 bg-white/10 rounded-xl border-2 border-dashed border-white/30"
          >
            {targetItem.emoji}
            <p className="text-sm text-center text-white/70 mt-2">{targetItem.label}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DragLevel;
