const names: String[] = ['Audi', 'BMW', 'Mercedes', 'Alpina', 'Dodge', 'Ford', 'Infinity', 'Lexus', 'Mitsubishi', 'Subaru'];
const models: String[] = ['Q8', 'M3', 'E55 AMG', 'B5', 'Charger', 'GT', 'QX', 'LFA', 'Lancer', 'BRZ'];

export function getRandomName(): string {
  const name = names[Math.floor(Math.random() * names.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  return `${name} ${model}`
}

export function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export function createCarImage(color: string) {
  ` <?xml version="1.0" encoding="utf-8"?>
  <!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon -->
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g>
      <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)" style="fill:${color}">
        <path
          d="M4280.9,1582.3c-280.4-27.6-817.8-99.8-1009-135.9c-271.9-53.1-1070.6-316.5-1646.2-545.9c-405.7-161.4-435.5-169.9-679.7-193.3C727.1,686,179.1,592.5,157.9,571.3c-4.3-2.1-21.2-59.5-38.2-125.3C87.8,320.6,94.1,256.9,143,184.7c14.9-23.4,27.6-91.3,27.6-150.8c0-189,133.8-437.6,293.1-545.9c63.7-44.6,121.1-57.4,312.3-76.5c129.6-12.7,303.8-34,386.6-46.7c223-31.9,248.5-14.9,348.4,233.7c42.5,110.5,97.7,225.2,121.1,254.9c65.9,91.4,212.4,191.2,327.1,225.2c165.7,48.8,454.6,42.5,605.4-12.8c231.5-87.1,416.3-320.7,473.7-599c14.9-78.6,46.7-148.7,80.7-186.9l57.4-63.7l584.1-10.6c320.8-6.4,1272.4-19.1,2113.5-29.7l1529.4-19.1l48.9,46.7c25.5,25.5,68,112.6,93.5,195.4c97.7,329.2,240,520.4,460.9,624.5c104.1,48.9,144.4,55.2,342,55.2c261.3,0,405.7-38.2,556.5-150.8c133.8-95.6,203.9-208.2,265.5-416.3c57.4-199.7,93.4-250.6,182.7-250.6c136,0,469.5,229.4,524.7,359c31.9,80.7,19.1,119-63.7,167.8c-59.5,38.2-61.6,42.5-29.7,70.1c97.7,80.7,148.7,348.4,91.3,473.7c-29.7,63.7-174.2,116.8-486.4,180.6c-110.5,23.4-271.9,72.2-359,106.2C8716.1,749.7,8709.8,749.7,7892,779.4c-420.6,14.9-775.3,23.4-788.1,17c-14.9-4.2-31.9-42.5-40.4-85l-12.7-74.3L6887.2,652c-89.2,8.5-182.7,25.5-206,38.2c-70.1,36.1-539.6,380.2-830.5,607.5c-180.5,142.3-310.1,227.3-380.2,250.7c-85,27.6-206,36.1-605.4,40.4C4591,1590.9,4327.6,1588.7,4280.9,1582.3z M5260.1,1376.3c184.8-57.4,244.3-110.5,320.7-295.3l68-163.6h-72.2c-95.6,0-116.8-42.5-102-208.2l12.7-131.7l-571.4-4.2c-958-10.6-1051.5-6.4-1127.9,31.9c-76.5,40.4-95.6,89.2-146.6,380.2c-36.1,199.7-36.1,210.3,2.1,250.7c51,55.2,295.3,123.2,658.5,178.4C4448.7,1435.8,5151.8,1408.2,5260.1,1376.3z" />
        <path
          d="M2052.6-8.7c-596.9-191.2-660.6-1002.6-102-1276.6c104.1-51,146.6-59.5,301.6-59.5c146.6,0,199.7,10.6,286.8,53.1c150.8,72.2,295.3,229.4,350.5,376c61.6,163.5,53.1,397.2-17,541.7C2723.9-72.4,2360.6,89.1,2052.6-8.7z M2462.6-272c140.2-70.1,235.8-233.7,235.8-403.6c0-42.5-25.5-129.6-57.4-193.3c-212.4-418.4-836.9-261.3-834.8,208.2C1808.3-323,2158.8-114.9,2462.6-272z" />
        <path
          d="M2090.9-514.2c-55.2-55.2-72.2-89.2-72.2-150.8c0-61.6,17-95.6,72.2-150.8c97.7-97.7,214.5-102,314.4-10.6c59.5,53.1,70.1,76.5,70.1,161.5c0,85-10.6,108.3-70.1,161.4C2305.4-412.2,2188.6-416.5,2090.9-514.2z" />
        <path
          d="M8178.7-15c-191.2-61.6-371.7-223-452.4-401.5c-65.9-148.7-63.7-380.2,8.5-535.3c76.5-163.6,169.9-263.4,318.6-337.8c180.6-91.3,320.8-102,509.8-44.6c129.6,38.2,172.1,63.7,274,165.7c161.4,161.4,220.9,314.4,206,524.7c-14.9,259.2-159.3,473.7-386.6,582C8541.9-6.5,8280.7,19,8178.7-15z M8505.8-252.9C8663-295.4,8816-505.7,8816-677.8c0-237.9-208.2-443.9-446.1-443.9c-186.9,0-325,82.8-407.8,242.1c-34,65.9-40.4,114.7-34,225.2c10.6,186.9,76.5,291,231.5,369.6C8280.7-225.3,8374.1-216.8,8505.8-252.9z" />
        <path
          d="M8270.1-473.8c-78.6-34-133.8-127.5-133.8-225.2c0-91.3,118.9-210.3,210.3-210.3c163.5,0,282.5,144.4,235.8,284.6C8535.6-484.5,8397.5-416.5,8270.1-473.8z" />
      </g>
    </g>
  </svg>`
}
export function generateCars(count = 100) {
  return new Array(count).fill(1).map((_) => ({ name: getRandomName(), color: getRandomColor() }));
}
