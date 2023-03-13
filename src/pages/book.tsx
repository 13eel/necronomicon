import { type NextPage } from "next";
import {
  DndContext,
  type DragEndEvent,
  useDraggable,
  useDroppable,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { type ReactNode, useState, type CSSProperties } from "react";
import { cx } from "class-variance-authority";

interface DragItem {
  id: UniqueIdentifier;
  children?: ReactNode;
  position: {
    x: number;
    y: number;
  };
}

const dragData: DragItem[] = [
  {
    id: 1,
    children: "First",
    position: {
      x: 0,
      y: 0,
    },
  },
];

const BookPage: NextPage = () => {
  const [items, setItems] = useState(dragData);
  // const containers = ["A", "B", "C"];
  // const [parent, setParent] = useState<UniqueIdentifier>();

  // const draggableMarkup = <Draggable id="draggable" />;

  const handleDragEnd = (e: DragEndEvent) => {
    const item = items.find((i) => i.id === e.active.id);
    if (item) {
      item.position.x += e.delta.x;
      item.position.y += e.delta.y;
      setItems(items.map((i) => (i.id === item.id ? item : i)));
    }
    // setParent(over ? over.id : undefined);
  };

  return (
    <main className="min-h-screen bg-slate-900 p-3">
      <DndContext
        onDragEnd={handleDragEnd}
        modifiers={[restrictToParentElement]}
      >
        {/* {!parent ? draggableMarkup : null} */}

        <DropArea id="drop">
          {items.map((item) => (
            <Draggable
              key={item.id}
              id={item.id}
              style={{
                position: "absolute",
                top: `${item.position.y}px`,
                left: `${item.position.x}px`,
              }}
            >
              {item.children}
            </Draggable>
          ))}
        </DropArea>
      </DndContext>
    </main>
  );
};

interface DropAreaProps {
  id: UniqueIdentifier;
  children?: ReactNode;
}

const DropArea = ({ children, id }: DropAreaProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });
  return (
    <div
      id={id?.toString()}
      ref={setNodeRef}
      style={{ color: isOver ? "green" : "" }}
      className="h-80 w-1/4 border border-slate-400"
    >
      {children}
    </div>
  );
};

interface DraggableProps {
  id: UniqueIdentifier;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const Draggable = ({ id, className, style, children }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
    });

  return (
    <button
      ref={setNodeRef}
      style={{
        transform: transform ? CSS.Translate.toString(transform) : "none",
        ...style,
      }}
      className={cx(
        className,
        "select-none bg-slate-200 p-2 hover:cursor-grab",
        isDragging ? "!cursor-grabbing" : ""
      )}
      {...listeners}
      {...attributes}
    >
      {children || "Drag Me"}
    </button>
  );
};

export default BookPage;
