import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  image?: ImageWidget;
  title?: string;
  description?: string;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

  export default function Numbers({ image = DEFAULT_IMAGE, title = "Title", description = 'Description' }: Props) {
 return (
    <div className="flex flex-col items-center mb-5 justify-center">
      <div className="flex items-center justify-center w-full max-w-xl bg-white rounded-md">
        <div className="flex gap-10 items-center justify-between">
          <Image src={image} alt={image} className="w-24 h-24" />
          <div className="flex flex-col items-center">
            <span className="text-blue-600 font-bold text-4xl font-bold text-center">{title}</span>
            <p className='text-lg'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
