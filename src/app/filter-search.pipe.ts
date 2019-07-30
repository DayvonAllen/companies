import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {
//filters through the string from the input and returns an array
  transform(Workers, search: String) {
    if(!Workers || !search){
      return Workers;
    }
    return Workers.filter(worker => 
      worker.fullName.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    }

}
