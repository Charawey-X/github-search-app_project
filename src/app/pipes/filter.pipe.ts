import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, filterString: string) {
    if (value.length == 0 || filterString == '') return value;

    const repos = []
    for (const repo of value){
      if (repo['name'].toLowerCase().includes(filterString.toLowerCase())){
        repos.push(repo);
      }
    }
    return repos;
  }

}
