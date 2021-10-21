import { frame } from '../init/variables';

const secToCount = (second: number) => {
	return second * frame;
};

export { secToCount };
