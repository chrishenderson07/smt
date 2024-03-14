import Link from 'next/link';
import { Ivideo } from '@/app/api/services/entities/videos';
import pageIcons from '@/utils/pageIcons';

export default function GameTeaserRowCard({ data }: Ivideo) {
  return (
    <>
      {data && (
        <div className='group'>
          <Link href={`/video/${data.id}`} className="flex space-x-3">
            <div className="relative w-40 h-24 bg-skeleton-dark rounded-xl flex-shrink-0">
              <div className="absolute bottom-3 right-2 text-xs p-[0.2rem] rounded-sm bg-skeleton-dark">
                12:31
              </div>
              <div className='hidden group-hover:flex items-center justify-center text-4xl absolute inset-0'>
                <pageIcons.CircularPlayerOutline/>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <h1 className="text-sm whitespace-normal break-words">
                {data.title}
              </h1>
            </div>
          </Link>
        </div>
      )}
    </>
   
  );
}
