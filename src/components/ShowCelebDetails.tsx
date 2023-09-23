import cn from '../utils/cn';
import { ChevronDown, ChevronUp, Trash2, Pencil } from 'lucide-react';
import calculateAge from '../utils/calculateAge';
import { useCelebState } from '../store/store';
import { TCelebrity } from './AccordionItem';

const ShowCelebDetails = ({
	celeb,
	isSelected,
}: {
	celeb: TCelebrity;
	isSelected: boolean;
}) => {
	const { isEditing, setIsEditing, accordionToggle } = useCelebState();

	return (
		<div
			key={celeb.id}
			className='border border-gray-600 rounded-lg px-4 py-2 text-sm'>
			<div
				className='flex w-full gap-4 items-center cursor-pointer text-lg'
				onClick={() => accordionToggle(celeb.id, isEditing)}>
				<img src={celeb.picture} alt='' className='rounded-full h-12' />
				<p className='font-bold'>
					{celeb.first} {celeb.last}
				</p>
				<span className='ml-auto'>
					{isSelected ? <ChevronUp /> : <ChevronDown />}
				</span>
			</div>

			<div
				className={cn('h-auto', {
					'max-h-[9999px] opacity-100 transition-all duration-300 ease-accordion-down':
						isSelected,
					'max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-accordion-up':
						!isSelected,
				})}>
				<div className='grid grid-cols-3 my-4'>
					<div>
						<p className='text-gray-400'>Age</p>
						<p>{calculateAge(celeb.dob)} years</p>
					</div>
					<div>
						<p className='text-gray-400'>Gender</p>
						<p>{celeb.gender}</p>
					</div>
					<div>
						<p className='text-gray-400'>Country</p>
						<p>{celeb.country}</p>
					</div>
				</div>
				<div>
					<p className='text-gray-400'>Description</p>
					<p>{celeb.description}</p>
				</div>
				<div className='flex justify-end gap-4 mt-4'>
					<Trash2 className='text-red-400 hover:text-red-600 transition cursor-pointer' />
					<Pencil
						className='text-blue-400 hover:text-blue-600 transition cursor-pointer'
						onClick={() => setIsEditing(true)}
					/>
				</div>
			</div>
		</div>
	);
};

export default ShowCelebDetails;