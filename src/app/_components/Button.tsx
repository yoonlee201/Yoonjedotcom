// 'use client';

// import { VariantProps, cva } from 'class-variance-authority';
// import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

// export type ButtonProps = PropsWithChildren<
//     ButtonHTMLAttributes<HTMLButtonElement>
// > &
//     VariantProps<typeof buttonVariants>;

// export default function Button({
//     children,
//     size = 'default',
//     look = 'default',
//     rounded = 'full',
//     onClick,
//     className,
//     disabled,
//     type,
//     ...rest
// }: ButtonProps) {
//     return (
//         <button
//             disabled={disabled}
//             type={type}
//             onClick={onClick}
//             className={buttonVariants({ size, rounded, look, className })}
//             {...rest}>
//             {children}
//         </button>
//     );
// }

// const buttonVariants = cva('rounded-full border text-nowrap min-w-fit', {
//     variants: {
//         size: {
//             default: 'text-button px-btn-inline py-btn-block',
//             small: 'text-sm px-tag-inline py-tag-block',
//             xsmall: 'text-xs px-tag-inline-sm py-tag-block-sm rounded-lg',
//         },
//         look: {
//             default:
//                 'text-white bg-black hover:text-black hover:border-black hover:bg-transparent',
//             outline:
//                 'text-black bg-transparent border-black hover:text-white hover:bg-black',
//             'fill-gray':
//                 'border-transparent bg-light text-dark hover:shadow-inner hover:border-gray',
//         },
//         rounded: {
//             full: 'rounded-full',
//             lg: 'rounded-lg',
//         },
//     },
//     defaultVariants: {
//         size: 'default',
//         look: 'default',
//         rounded: 'full',
//     },
// });
