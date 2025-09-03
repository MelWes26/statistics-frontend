import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber',
  standalone: true // Use 'standalone: true' if you're using standalone components
})
export class ShortNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null) {
      return '';
    }

    // Check for billions (milliards)
    if (Math.abs(value) >= 1000000000) {
      return (value / 1000000000).toFixed(1) + 'Md';
    }
    // Check for millions
    if (Math.abs(value) >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    // Check for thousands
    if (Math.abs(value) >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }

    return value.toString();
  }
}
