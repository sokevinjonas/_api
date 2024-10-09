import vine from '@vinejs/vine'

export const RegisterUserValidator = vine.compile(
  vine.object({
    code_atelier: vine.string().trim(),
    nom_etablissement: vine.string().trim(),
    nom_proprietaire: vine.string().trim(),
    indicatif_pays: vine.string().trim().startsWith('+'),
    telephone: vine.string().trim().mobile(),
    password: vine.string().trim().minLength(4),
    role: vine.enum(['admin', 'employer']),
  })
)
