import React, {FC} from 'react'
import type { Sizes } from '@/interfaces';
import clsx from 'clsx';

interface Props {
  selectedSize: Sizes;
  availableSize: Sizes[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, availableSize }) => {
  return (
    <div className='my-5'>
      <h3 className="font-bold mb-4">Tallas disponibles</h3>
      
      <div className='flex'>
        {
          availableSize.map(size => (
            <button key={ size } className={clsx("mx-2 hover:underline text-lg", { "underline": selectedSize === size })}>{ size }</button>
          ))
        }
      </div>

    </div>
  )
}
