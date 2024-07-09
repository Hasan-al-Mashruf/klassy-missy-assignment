"use client";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column/Column";
import {
  reorderItems,
  updateStatus,
} from "@/redux/features/regiment/regimentSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";

const KanbanBoard = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state?.regiment.items);
  const columns = [
    {
      id: "incoming",
      title: "Incoming Request",
      items: items.filter((item) => item.status === "incoming"),
    },
    {
      id: "processing",
      title: "Processing",
      items: items.filter((item) => item.status === "processing"),
    },
    {
      id: "done",
      title: "Done | Updated",
      items: items.filter((item) => item.status === "done"),
    },
  ];

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      // Handle reordering within the same column
      if (destination.index !== source.index) {
        dispatch(
          reorderItems({
            columnId: destination.droppableId,
            startIndex: source.index,
            endIndex: destination.index,
          })
        );
      }
    } else {
      // Handle moving to a different column
      dispatch(
        updateStatus({ uuid: draggableId, status: destination.droppableId })
      );
      dispatch(
        reorderItems({
          columnId: destination.droppableId,
          startIndex: -1,
          endIndex: destination.index,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[51px]">
        {columns.map((column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Column title={column.title} items={column.items} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
