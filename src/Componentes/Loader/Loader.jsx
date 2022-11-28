import { Ring } from '@uiball/loaders'



export function Loader({size, lineWeight, speed, color  }) {
    return(
        <Ring 
            size={size}
            lineWeight={lineWeight}
            speed={ speed} 
            color={ color} 
        />
    )
}