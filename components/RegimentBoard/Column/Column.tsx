// components/Column.js
import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from "../Card/Card";
import { IRegiment } from "@/types/types.global";

const Column: FC<{ title: string; items: IRegiment[] }> = ({
  title,
  items,
}) => {
  return (
    <div className="bg-gray p-6 lg:min-h-screen rounded-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-primary font-medium text-lg">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="8"
          viewBox="0 0 25 8"
          fill="none"
        >
          <path
            d="M8.59375 3.51563C8.59375 1.57227 10.166 0 12.1094 0C14.0527 0 15.625 1.57227 15.625 3.51563C15.625 5.45898 14.0527 7.03125 12.1094 7.03125C10.166 7.03125 8.59375 5.45898 8.59375 3.51563ZM3.51562 7.03125C5.45898 7.03125 7.03125 5.45898 7.03125 3.51563C7.03125 1.57227 5.45898 0 3.51563 0C1.57227 0 0 1.57227 0 3.51562C0 5.45898 1.57227 7.03125 3.51562 7.03125ZM20.7031 7.03125C22.6465 7.03125 24.2188 5.45898 24.2188 3.51563C24.2188 1.57227 22.6465 0 20.7031 0C18.7598 0 17.1875 1.57227 17.1875 3.51563C17.1875 5.45898 18.7598 7.03125 20.7031 7.03125Z"
            fill="#172B4D"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-[22px]">
        {items?.map((item, index) => (
          <Draggable key={item.uuid} draggableId={item.uuid} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Card item={item} />
              </div>
            )}
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Column;
