import { COMPOSING } from './constants';
import makeDecoratedComponent from './makeDecoratedComponent';

function applyCompose(decorator) {
  return decorator(COMPOSING);
}

export default function composeDecorators(...partialDecorators) {
  return makeDecoratedComponent.bind(
    null,
    partialDecorators.map(applyCompose)
  );
}
