import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_site_settings_hidden_services" ADD VALUE 'business-cards' BEFORE 'social-media-management';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site_settings_hidden_services" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_site_settings_hidden_services";
  CREATE TYPE "public"."enum_site_settings_hidden_services" AS ENUM('graphic-design-branding', 'social-media-management', 'ai-video-production', 'website-design-development', 'software-digital-solutions', 'business-documentation', 'professional-writing', 'consultancy', 'esg-advisory');
  ALTER TABLE "site_settings_hidden_services" ALTER COLUMN "value" SET DATA TYPE "public"."enum_site_settings_hidden_services" USING "value"::"public"."enum_site_settings_hidden_services";`)
}
