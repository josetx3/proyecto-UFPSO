import { FormGroup } from '@angular/forms';

export function clearCurrencyValue(value: string | null): number {
  if (value === null) {
    return parseFloat('');
  }
  value = value.replaceAll('BOB', '');
  value = value.replaceAll('USD', '');
  value = value.replaceAll(',', '');
  return parseFloat(value)
}

export function clearNewCurrencyValue(value: string | null): number {
  if (value === null) {
    return parseFloat('');
  }
  value = value.replaceAll('Bs', '');
  value = value.replaceAll('$', '');
  value = value.replaceAll(',', '');
  return parseFloat(value)
}


export function clearPercentageValue(value: string | null): string {
  if (!value){
    return '';
  }
  value = value.replaceAll(',', '');
  return value.replaceAll('%', '').trim();
}

/*** --- Obtener fechas --- ***/
export function getDayStart(): Date {
  const date = new Date();
  date.setHours(0, 0, 0, 0)
  return date;
}

export function getFirstDayOfYesterday(date: Date): Date {
  date.setDate(date.getDate() - 1);
  return date;
}

export function getFirstDayOfThisWeek(date: Date): Date {
  date.setDate(date.getDate() - date.getDay());
  date.setHours(0, 0, 0, 0);
  return date;
}

export function getFirstDayOfLastWeek(date: Date): Date {
  date.setDate(date.getDate() - date.getDay() - 7);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function getLastDayOfLastWeek(date: Date): Date {
  date.setDate(date.getDate() - date.getDay() - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function getFirstDayOfThisMonth(date: Date): Date {
  date.setMonth(date.getMonth(), 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function getFirstDayOfLastMonth(date: Date): Date {
  date.setMonth(date.getMonth() - 1, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function getLastDayOfLastMont(date: Date): Date {
  date.setMonth(date.getMonth(), 1);
  date.setDate(date.getDate() - 1);
  return date;
}

export function getFirstDayOfLastYear(date: Date): Date {
  date.setFullYear(date.getFullYear() - 1, 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function getLastDayOfLastYear(date: Date): Date {
  date.setFullYear(date.getFullYear(), 0, 1);
  date.setDate(date.getDate() - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function isEndDateMajor(form: FormGroup): void {
  const starDate = form.get('startDate')?.value;
  const endDate = form.get('endDate')?.value;
  if (!starDate || !endDate) return;

  form.get('endDate')?.setErrors((Date.parse(starDate) > Date.parse(endDate)) ? { dateMajor: true } : null)
}



