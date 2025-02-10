import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col w-[310px] h-[570px] rounded-md shadow-md overflow-hidden mb-2">
      <Skeleton className="h-[245px]" />
      <div className="p-5">
        <Skeleton className="h-[20px] w-[100%] mb-2" />
        <Skeleton className="h-[20px] w-[150px] mb-5" />

        <Skeleton className="h-[10px] w-[100%] mb-2" />
        <Skeleton className="h-[10px] w-[100%] mb-2" />
        <Skeleton className="h-[10px] w-[100%] mb-2" />
        <Skeleton className="h-[10px] w-[150px] mb-2" />

        <Skeleton className="h-[10px] w-[100%] mb-5" />
        <Skeleton className="h-[10px] w-[100%] mb-2" />
        <Skeleton className="h-[10px] w-[100%] mb-2" />
        <Skeleton className="h-[10px] w-[150px] mb-5" />

        <div className="flex justify-around items-center">
        <Skeleton className="h-12 w-[105px] " />
        <Skeleton className="h-12 w-[105px] " />
        </div>
      </div>
    </div>
  )
}
