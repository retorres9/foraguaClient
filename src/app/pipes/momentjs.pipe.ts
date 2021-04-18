import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentjsPipe implements PipeTransform {

  transform(date: Date): string {
    moment.locale('es-mx');
    const outputDate = moment(date).startOf('hour').fromNow();
    console.log(outputDate);
    
    return outputDate;
  }

}
