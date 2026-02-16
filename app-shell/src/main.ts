import Luigi from '@luigi-project/core';
import { luigiConfig }  from './luigi-config';

Luigi.setConfig(luigiConfig);
Luigi.bootstrap();
