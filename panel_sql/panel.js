const summaries = [
  'Crea esquemas, traslada las tablas y agrega PK/FK para proteger la integridad.',
  'Crea logins, usuarios y roles con permisos mínimos y pruebas de acceso.',
  'Crea cuatro vistas para ventas, productos, envíos e inventario.',
  'Crea procedimientos de inserción, actualización y eliminación con validaciones.',
  'Prepara staging, control ETL y el procedimiento idempotente de carga online.',
  'Presenta consultas para responder las cuatro preguntas de negocio.'
];
const titles = ['Fortalecimiento del modelo','Seguridad basada en roles','Vistas de reporte','Procedimientos almacenados','Integración ETL','Preguntas de negocio'];

fetch('../Estudiante_Actividad3.sql').then(r => r.text()).then(sql => {
  const blocks = sql.split(/\/\* ={60,}\s*\n\s*BLOQUE \d+[^]*?\n\s*={60,}\s*\*\//g).slice(1);
  blocks.forEach((source, i) => renderBlock(i, source.trim()));
}).catch(() => document.getElementById('bloques').textContent = 'No se pudo cargar el script SQL. Abra el archivo Estudiante_Actividad3.sql directamente.');

function renderBlock(i, source) {
  const node = document.getElementById('card').content.cloneNode(true);
  node.querySelector('.number').textContent = i + 1;
  node.querySelector('h2').textContent = titles[i];
  node.querySelector('.summary').textContent = summaries[i];
  node.querySelector('code').textContent = source;
  const status = node.querySelector('.status');
  node.querySelector('.copy').onclick = async e => {
    await navigator.clipboard.writeText(source);
    e.target.textContent = 'Copiado'; setTimeout(() => e.target.textContent = 'Copiar bloque', 1200);
  };
  node.querySelector('.done').onclick = e => { status.textContent = 'Revisado. Ejecútelo en SSMS para aplicar cambios.'; status.classList.add('ok'); e.target.disabled = true; };
  document.getElementById('bloques').append(node);
}

